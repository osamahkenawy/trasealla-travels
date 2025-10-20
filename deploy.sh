#!/bin/bash

# Trasealla Landing Page Deployment Script
# This script builds the project and deploys it to the server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration - Update these variables as needed
SERVER_HOST="your-server-host"
SERVER_USER="root"
SERVER_PATH="/var/www/trasealla/frontend-landing-page"
LOCAL_BUILD_DIR="./dist"

echo -e "${GREEN}🚀 Starting Trasealla Landing Page Deployment...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Install dependencies if needed
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build the project
echo -e "${YELLOW}🔨 Building project for production...${NC}"
npm run build

# Check if build was successful
if [ ! -d "$LOCAL_BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: Build failed. dist directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Deploy to server (uncomment and configure the following lines for actual deployment)
# echo -e "${YELLOW}🚀 Deploying to server...${NC}"
# 
# # Create remote directory if it doesn't exist
# ssh $SERVER_USER@$SERVER_HOST "mkdir -p $SERVER_PATH"
# 
# # Sync files to server (rsync for efficient transfer)
# rsync -avz --delete \
#     --exclude='.git' \
#     --exclude='node_modules' \
#     --exclude='src' \
#     --exclude='public' \
#     "$LOCAL_BUILD_DIR/" \
#     "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/"

# For manual deployment, provide instructions
echo -e "${GREEN}✅ Build completed! Ready for deployment.${NC}"
echo ""
echo -e "${YELLOW}📋 Manual Deployment Steps:${NC}"
echo "1. Copy the contents of the '$LOCAL_BUILD_DIR' folder"
echo "2. Upload/transfer these files to: $SERVER_PATH"
echo "3. Ensure your web server is configured to serve files from this directory"
echo ""
echo -e "${YELLOW}🔧 Server Commands (run on your server):${NC}"
echo "   mkdir -p $SERVER_PATH"
echo "   # Then copy your dist/ contents to $SERVER_PATH"
echo ""
echo -e "${GREEN}🎉 Deployment preparation complete!${NC}"

# Optional: Open build directory in file manager (macOS)
if command -v open &> /dev/null && [[ "$OSTYPE" == "darwin"* ]]; then
    echo -e "${YELLOW}📁 Opening build directory...${NC}"
    open "$LOCAL_BUILD_DIR"
fi
