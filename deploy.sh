#!/bin/bash

# Trasealla Landing Page Deployment Script
# This script builds the project and deploys it to the server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration - Server details
SERVER_HOST="72.61.177.109"
SERVER_USER="root"
SERVER_PATH="/var/www/trasealla/frontend-landing-page"
LOCAL_BUILD_DIR="./dist"

# Function to prompt for password securely
prompt_password() {
    echo -n "Enter server password for $SERVER_USER@$SERVER_HOST: "
    read -s SERVER_PASSWORD
    echo
}

echo -e "${GREEN}🚀 Starting Trasealla Landing Page Deployment...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Install dependencies if needed
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install --legacy-peer-deps

# Build the project
echo -e "${YELLOW}🔨 Building project for production...${NC}"
npm run build

# Check if build was successful
if [ ! -d "$LOCAL_BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: Build failed. dist directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Deploy to server
echo -e "${YELLOW}🚀 Deploying to server...${NC}"

# Check if sshpass is available for password authentication
if command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}📝 Using sshpass for password authentication...${NC}"
    prompt_password
    
    # Create remote directory if it doesn't exist
    sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST "mkdir -p $SERVER_PATH"
    
    # Sync files to server using sshpass
    sshpass -p "$SERVER_PASSWORD" rsync -avz --delete \
        -e "ssh -o StrictHostKeyChecking=no" \
        "$LOCAL_BUILD_DIR/" \
        "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/"
else
    echo -e "${YELLOW}📝 sshpass not found. You'll need to enter the password manually...${NC}"
    echo -e "${YELLOW}💡 To install sshpass: brew install hudochenkov/sshpass/sshpass (macOS) or apt-get install sshpass (Ubuntu)${NC}"
    echo ""
    
    # Create remote directory if it doesn't exist
    ssh $SERVER_USER@$SERVER_HOST "mkdir -p $SERVER_PATH"
    
    # Sync files to server (will prompt for password)
    rsync -avz --delete \
        "$LOCAL_BUILD_DIR/" \
        "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/"
fi

# Set proper permissions on server
echo -e "${YELLOW}🔧 Setting server permissions...${NC}"
if command -v sshpass &> /dev/null && [ ! -z "$SERVER_PASSWORD" ]; then
    sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST "
        cd $SERVER_PATH && 
        chown -R www-data:www-data . && 
        find . -type d -exec chmod 755 {} \; && 
        find . -type f -exec chmod 644 {} \;
    "
else
    ssh $SERVER_USER@$SERVER_HOST "
        cd $SERVER_PATH && 
        chown -R www-data:www-data . && 
        find . -type d -exec chmod 755 {} \; && 
        find . -type f -exec chmod 644 {} \;
    "
fi

echo -e "${GREEN}🎉 Deployment to $SERVER_HOST completed successfully!${NC}"
echo -e "${YELLOW}📍 Files deployed to: $SERVER_PATH${NC}"

# Optional: Open build directory in file manager (macOS)
if command -v open &> /dev/null && [[ "$OSTYPE" == "darwin"* ]]; then
    echo -e "${YELLOW}📁 Opening build directory...${NC}"
    open "$LOCAL_BUILD_DIR"
fi
