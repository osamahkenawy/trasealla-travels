import React, { useState } from 'react';
import { Form, Button, Carousel, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../assets/login.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  
  const [step, setStep] = useState('request'); // 'request' or 'success'
  const [formData, setFormData] = useState({
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

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
      // TODO: Implement forgot password API endpoint
      // For now, we'll simulate a successful request
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate successful response
      setStep('success');
      setAlertMessage({
        type: 'success',
        message: 'Password reset instructions have been sent to your email.'
      });

      /* 
      // Uncomment when backend endpoint is ready
      const response = await fetch('http://localhost:5001/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setStep('success');
        setAlertMessage({
          type: 'success',
          message: data.message || 'Password reset instructions have been sent to your email.'
        });
      } else {
        setAlertMessage({
          type: 'danger',
          message: data.message || 'Failed to send reset email. Please try again.'
        });
      }
      */
    } catch (error) {
      console.error('Forgot password error:', error);
      
      setAlertMessage({
        type: 'danger',
        message: error.message || 'Failed to send reset email. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const carouselItems = [
    {
      src: '/assets/img/login/admin-background.png',
      subHeader: 'We\'ll help you get back into your account securely'
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

      {/* Right Panel with Forgot Password Form */}
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

              {step === 'request' ? (
                <>
                  {/* Main Heading */}
                  <div className="heading-container">
                    <h1 className="main-heading">Forgot Password?</h1>
                    <p className="sub-heading">
                      No worries! Enter your email and we&apos;ll send you reset instructions
                    </p>
                  </div>

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

                  {/* Forgot Password Form */}
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
                        autoFocus
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 login-btn mb-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Reset Instructions'
                      )}
                    </Button>

                    <div className="text-center">
                      <Button 
                        variant="link" 
                        className="register-link"
                        onClick={handleBackToLogin}
                        disabled={loading}
                      >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to Login
                      </Button>
                    </div>
                  </Form>
                </>
              ) : (
                <>
                  {/* Success Message */}
                  <div className="heading-container text-center">
                    <div className="mb-4">
                      <i className="bi bi-envelope-check" style={{ fontSize: '64px', color: '#7C3AED' }}></i>
                    </div>
                    <h1 className="main-heading">Check Your Email</h1>
                    <p className="sub-heading">
                      We&apos;ve sent password reset instructions to:
                    </p>
                    <p className="fw-bold text-primary mb-4">
                      {formData.email}
                    </p>
                    <p className="sub-heading mb-4">
                      Please check your inbox and follow the instructions to reset your password. 
                      The link will expire in 1 hour.
                    </p>
                  </div>

                  <Alert variant="info" className="mb-3">
                    <i className="bi bi-info-circle me-2"></i>
                    Didn&apos;t receive the email? Check your spam folder or try again.
                  </Alert>

                  <Button 
                    variant="outline-primary" 
                    className="w-100 mb-3"
                    onClick={() => setStep('request')}
                  >
                    Resend Email
                  </Button>

                  <div className="text-center">
                    <Button 
                      variant="link" 
                      className="register-link"
                      onClick={handleBackToLogin}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Back to Login
                    </Button>
                  </div>
                </>
              )}
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

export default ForgotPasswordPage;

