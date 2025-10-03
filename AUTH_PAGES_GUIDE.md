# Authentication Pages Guide

## 📄 Overview

Complete authentication system with Login, Register, and Forgot Password pages for Trasealla travel agency.

## ✅ Completed Pages

### 1. **Login Page** (`/login`)
- **Location**: `src/Pages/LoginPage.jsx`
- **Features**:
  - Email/password authentication
  - Form validation
  - Password show/hide toggle
  - Remember me checkbox
  - Role-based redirection (admin, agent, customer)
  - Loading states
  - Error/success alerts
  - Links to register and forgot password
  - Responsive design

### 2. **Register Page** (`/register`)
- **Location**: `src/Pages/RegisterPage.jsx`
- **Features**:
  - Customer registration only
  - Multi-field form (first name, last name, email, phone, etc.)
  - Password strength validation
  - Confirm password matching
  - Optional fields (DOB, gender, nationality)
  - Terms and conditions agreement
  - Form validation
  - Password show/hide toggle
  - Success redirect to login
  - Responsive two-column layout

### 3. **Forgot Password Page** (`/forgot-password`)
- **Location**: `src/Pages/ForgotPasswordPage.jsx`
- **Features**:
  - Email-based password reset request
  - Two-step process (request → success)
  - Success confirmation screen
  - Resend email option
  - Back to login navigation
  - Email validation
  - Ready for backend integration

## 🎨 Design Features

All pages include:
- ✅ Modern two-panel design
- ✅ Left: Carousel with background image
- ✅ Right: Form content
- ✅ Trasealla logo branding
- ✅ Mobile responsive (carousel hidden on mobile)
- ✅ Bootstrap Icons
- ✅ Consistent styling
- ✅ Loading states with spinners
- ✅ Form validation with error messages

## 🔗 Routes

```javascript
/login              → Login Page
/register           → Register Page (Customer)
/forgot-password    → Forgot Password Page
```

## 📡 API Endpoints

### Login
```http
POST http://localhost:5001/api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "user@example.com",
      "role": "customer"
    },
    "token": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

### Register
```http
POST http://localhost:5001/api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "Password123!",
  "phone": "+1234567890",
  "dateOfBirth": "1990-01-01",
  "gender": "male",
  "nationality": "US",
  "role": "customer"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": { ... },
    "token": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

### Forgot Password (TODO: Needs Backend Implementation)
```http
POST http://localhost:5001/api/auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Password reset instructions sent to your email"
}
```

## 🚀 Usage

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Create First Admin User
```bash
cd backend
node scripts/createFirstAdmin.js
```

### 3. Access Pages
- Login: `http://localhost:5173/login`
- Register: `http://localhost:5173/register`
- Forgot Password: `http://localhost:5173/forgot-password`

## 📝 Form Validation Rules

### Login
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

### Register
- **First Name**: Required, min 2 characters
- **Last Name**: Required, min 2 characters
- **Email**: Required, valid email format
- **Password**: Required, min 6 characters, must contain:
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
- **Confirm Password**: Must match password
- **Phone**: Optional, valid phone format if provided
- **Terms**: Must agree to proceed

### Forgot Password
- **Email**: Required, valid email format

## 🔐 Password Requirements

Passwords must:
- Be at least 6 characters long
- Contain at least one uppercase letter (A-Z)
- Contain at least one lowercase letter (a-z)
- Contain at least one number (0-9)

Example valid passwords:
- `Password123!`
- `MyPass456`
- `Admin123!`

## 🎯 User Roles & Redirects

After successful login, users are redirected based on their role:

| Role     | Redirect To           | Created Via                  |
|----------|-----------------------|------------------------------|
| customer | `/` (homepage)        | Register page                |
| agent    | `/agent/dashboard`    | Admin creates via API        |
| admin    | `/admin/dashboard`    | Script or Admin creates      |

## 🔄 Navigation Flow

```
Login Page
  ├─→ "Register Now" → Register Page
  ├─→ "Forgot Password?" → Forgot Password Page
  └─→ Successful Login → Role-based dashboard

Register Page
  ├─→ "Sign In" → Login Page
  └─→ Successful Registration → Login Page

Forgot Password Page
  ├─→ "Back to Login" → Login Page
  └─→ Email Sent → Success Screen → Login Page
```

## 📱 Responsive Breakpoints

- **Desktop (> 768px)**: Two-panel layout with carousel
- **Mobile (< 768px)**: Single panel, carousel hidden
- **Small Height (< 600px)**: Adjusted spacing

## 🎨 Customization

### Change Background Image
Edit in respective page file:
```javascript
const carouselItems = [
  {
    src: '/assets/img/your-custom-image.png',
    subHeader: 'Your custom text'
  }
];
```

### Change Logo
All pages use: `/assets/img/logo/trasealla-logo/TRASEALLA.png`

To change, edit the image path in each page.

### Change Colors
Edit `src/assets/login.css`:
- Primary color: `#7C3AED`
- Danger color: `#DC3545`
- Success color: `#28A745`

### Add More Fields to Register
1. Add to `formData` state
2. Add validation in `validateForm()`
3. Add Form.Group in JSX
4. Include in API request body

## 🔜 TODO: Backend Implementation Needed

### Forgot Password Endpoint
Create in `backend/controllers/authController.js`:

```javascript
// @desc    Send password reset email
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    
    // Find user
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No account found with that email'
      });
    }
    
    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    
    // Save token to user
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = Date.now() + 3600000; // 1 hour
    await user.save();
    
    // Send email (implement your email service)
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    // await sendEmail({ to: email, subject: '...', html: '...' });
    
    res.json({
      success: true,
      message: 'Password reset instructions sent to your email'
    });
  } catch (error) {
    next(error);
  }
};
```

### Reset Password Endpoint
```javascript
// @desc    Reset password with token
// @route   POST /api/auth/reset-password/:token
// @access  Public
const resetPassword = async (req, res, next) => {
  // Implementation here
};
```

Add routes in `backend/routes/auth.js`:
```javascript
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
```

## 🐛 Troubleshooting

### "Cannot POST /api/auth/register"
- Check backend is running on port 5001
- Verify route exists in `backend/routes/auth.js`

### "User already exists"
- Email is already registered
- Try different email or use login

### "Validation failed"
- Check form fields meet requirements
- View browser console for detailed errors

### CORS Issues
Ensure backend has CORS enabled:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

## 📞 Support

For issues or questions:
- Backend API: See `backend/API_DOCUMENTATION.md`
- Postman Collection: See `backend/POSTMAN_GUIDE.md`
- Database Setup: See `backend/SETUP_GUIDE.md`

## ✨ Features Summary

| Feature | Login | Register | Forgot Password |
|---------|-------|----------|-----------------|
| Email validation | ✅ | ✅ | ✅ |
| Password validation | ✅ | ✅ | - |
| Show/hide password | ✅ | ✅ | - |
| Loading states | ✅ | ✅ | ✅ |
| Error handling | ✅ | ✅ | ✅ |
| Success messages | ✅ | ✅ | ✅ |
| API integration | ✅ | ✅ | ⏳ (Ready) |
| Responsive design | ✅ | ✅ | ✅ |
| Form validation | ✅ | ✅ | ✅ |
| Navigation links | ✅ | ✅ | ✅ |

✅ = Implemented | ⏳ = Ready for backend

