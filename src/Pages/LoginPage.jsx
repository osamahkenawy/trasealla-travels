import React, { useState, useEffect } from 'react';
import { Form, Button, Carousel, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import '../assets/login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('trasealla_token');
    const userRole = localStorage.getItem('trasealla_user_role');
    
    if (token && userRole) {
      // Redirect based on role
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'agent') {
        navigate('/agent/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setAlertMessage(null);

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        const { user, token, refreshToken } = data.data;
        
        // Store auth data
        localStorage.setItem('trasealla_token', token);
        localStorage.setItem('trasealla_refresh_token', refreshToken);
        localStorage.setItem('trasealla_user', JSON.stringify(user));
        localStorage.setItem('trasealla_user_role', user.role);
        
        // Show success message
        setAlertMessage({
          type: 'success',
          message: 'Login successful! Redirecting...'
        });

        // Redirect based on role
        setTimeout(() => {
          if (user.role === 'admin') {
            navigate('/admin/dashboard');
          } else if (user.role === 'agent') {
            navigate('/agent/dashboard');
          } else {
            navigate('/');
          }
        }, 1500);
      } else {
        setAlertMessage({
          type: 'danger',
          message: data.message || 'Login failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      
      setAlertMessage({
        type: 'danger',
        message: error.message || 'Login failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const carouselItems = [
    {
      src: '/assets/img/login/admin-background.png',
      subHeader: 'Your gateway to unforgettable adventures around the world'
    }
  ];

  return (
    <div className="login-container">
      {/* Left Sidebar with Carousel */}
      <div className="carousel-sidebar">
        <Carousel 
          indicators={true} 
          controls={false} 
          interval={5000}
          fade
          className="h-100 auth-carousel"
        >
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                className="carousel-image-wrapped"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className="content-overlay">
                  {item.subHeader && (
                    <div className="carousel-subheader">
                      <p>{item.subHeader}</p>
                    </div>
                  )}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Right Panel with Login Form */}
      <div className="login-panel">
        <div className="login-content">
          <div className="main-content-wrapper">
            <div className="form-container">
              {/* Logo */}
              <div className="logo-container">
                <img 
                  src="/assets/img/logo/trasealla-logo/TRASEALLA.png" 
                  alt="Trasealla Logo" 
                  style={{ width: '250px', maxWidth: '100%' }}
                />
              </div>

              {/* Main Heading */}
              {/* <div className="heading-container">
                <p className="sub-heading">
                  Sign in to your account to continue
                </p>
              </div> */}

              {/* Alert Message */}
              {alertMessage && (
                <Alert 
                  variant={alertMessage.type} 
                  dismissible 
                  onClose={() => setAlertMessage(null)}
                  className="mb-3"
                >
                  {alertMessage.message}
                </Alert>
              )}

              {/* Login Form */}
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="field-label">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    isInvalid={!!errors.email}
                    disabled={loading}
                    className="form-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="field-label">
                    Password
                  </Form.Label>
                  <div className="password-input-wrapper">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      isInvalid={!!errors.password}
                      disabled={loading}
                      className="form-input"
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check 
                    type="checkbox" 
                    label="Remember me"
                    className="remember-me-check"
                  />
                  <Button 
                    variant="link" 
                    className="forgot-password-link"
                    onClick={handleForgotPassword}
                    disabled={loading}
                  >
                    Forgot Password?
                  </Button>
                </div>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 login-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>

                <div className="text-center mt-3">
                  <span className="no-account-text">
                    Don&apos;t have an account?{' '}
                  </span>
                  <Button 
                    variant="link" 
                    className="register-link"
                    onClick={handleRegister}
                    disabled={loading}
                  >
                    Register Now
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* Footer with Logo */}
          <div className="login-footer">
            <img 
              src="/assets/img/logo/trasealla-logo/T.png" 
              alt="Trasealla Logo" 
              className="footer-logo" 
            />
            <span className="powered-by-text">
              © 2024 Trasealla. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

