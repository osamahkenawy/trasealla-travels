# Login Page Setup Guide

## ✅ Completed

### 1. **Login Page Created**
- **Location**: `src/Pages/LoginPage.jsx`
- **Route**: `/login`
- **Features**:
  - Modern two-panel design (carousel + form)
  - Email/password validation
  - Password show/hide toggle
  - Loading states with spinner
  - Error/success alerts
  - Role-based redirection (admin/agent/customer)
  - Responsive mobile design

### 2. **Styling**
- **Location**: `src/assets/login.css`
- Matches your Vue template design
- Responsive and mobile-friendly
- RTL support ready
- Custom carousel with backdrop blur

### 3. **Routes Updated**
- Added `/login` route in `src/Routes/Routes.jsx`

## 🚀 How to Use

### 1. Start the Backend
```bash
cd backend
npm run dev
```
The backend should be running on `http://localhost:5001`

### 2. Create First Admin User
```bash
cd backend
node scripts/createFirstAdmin.js
```

This will create an admin user with:
- **Email**: `admin@trasealla.com`
- **Password**: `Admin123!`

### 3. Start the Frontend
```bash
# From the root project directory
npm run dev
```

### 4. Access Login Page
Navigate to: `http://localhost:5173/login`

## 🔐 Login Credentials (After Creating Admin)

**Admin Account:**
- Email: `admin@trasealla.com`
- Password: `Admin123!`

**To create more users:**
Use the backend API or register through the app (once register page is created).

## 📡 API Endpoints Used

### Login
- **POST** `http://localhost:5001/api/auth/login`
- **Body**: 
  ```json
  {
    "email": "admin@trasealla.com",
    "password": "Admin123!"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": { ... },
      "token": "jwt_token_here",
      "refreshToken": "refresh_token_here"
    }
  }
  ```

### Create Admin (Admin Only)
- **POST** `http://localhost:5001/api/auth/create-admin`
- **Headers**: 
  ```
  Authorization: Bearer <admin_token>
  ```
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123!",
    "phone": "+1234567890",
    "role": "admin"
  }
  ```

## 🎨 Customization

### Change Background Image
Edit `src/Pages/LoginPage.jsx`:
```javascript
const carouselItems = [
  {
    src: '/assets/img/login/your-image.png', // Change here
    subHeader: 'Your custom text here'
  }
];
```

### Change Logo
Replace the logo path in `LoginPage.jsx`:
```javascript
<img 
  src="/assets/img/logo/your-logo.svg" 
  alt="Your Logo" 
/>
```

### Change Colors
Edit `src/assets/login.css`:
- Primary color: `#7C3AED` (search and replace)
- Change to your brand colors

## 📱 Features

✅ Email/password validation  
✅ Show/hide password toggle  
✅ Remember me checkbox  
✅ Forgot password link (route ready)  
✅ Register link (route ready)  
✅ Loading states  
✅ Error handling  
✅ Success messages  
✅ JWT token management  
✅ Role-based redirects  
✅ Responsive design  
✅ Bootstrap icons  
✅ React Bootstrap components  

## 🔜 Next Steps

1. **Create Register Page** - User registration form
2. **Create Forgot Password Page** - Password reset flow
3. **Create Admin Dashboard** - Admin interface
4. **Create Agent Dashboard** - Agent interface
5. **Add Protected Routes** - Route guards for authenticated pages
6. **Add Logout Functionality** - Logout button in header

## 🐛 Troubleshooting

### Port 5001 Already in Use
```bash
# Check what's using port 5001
lsof -i :5001

# Kill the process or change port in backend/.env
PORT=5002
```

### CORS Issues
Add to `backend/server.js`:
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Database Connection Issues
Check `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trasealla_db
DB_USER=root
DB_PASSWORD=your_password
```

## 📞 Support

For issues or questions, refer to:
- `backend/README.md` - Backend documentation
- `backend/API_DOCUMENTATION.md` - API reference
- `backend/POSTMAN_GUIDE.md` - API testing guide

