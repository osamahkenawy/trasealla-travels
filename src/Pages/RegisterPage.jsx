import React, { useState } from 'react';
import { Form, Button, Carousel, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { buildApiUrl, API_CONFIG } from '../config/api';
import '../assets/login.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Phone (optional but validate if provided)
    if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Terms
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.REGISTER), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth || undefined,
          gender: formData.gender || undefined,
          nationality: formData.nationality || undefined,
          role: 'customer'
        })
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setAlertMessage({
          type: 'success',
          message: 'Registration successful! Redirecting to homepage...'
        });

        // Redirect to home after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setAlertMessage({
          type: 'danger',
          message: data.message || 'Registration failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      setAlertMessage({
        type: 'danger',
        message: error.message || 'Registration failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleHomeRedirect = () => {
    navigate('/');
  };

  const carouselItems = [
    {
      src: '/assets/img/login/admin-background.png',
      subHeader: 'Join thousands of travelers exploring the world with Trasealla'
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

      {/* Right Panel with Register Form */}
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
              <div className="heading-container">
                <h1 className="main-heading">Create Account</h1>
                <p className="sub-heading">
                  Join us and start your travel journey today
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

              {/* Register Form */}
              <Form onSubmit={handleSubmit} className="login-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label className="field-label">
                        First Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        isInvalid={!!errors.firstName}
                        disabled={loading}
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Label className="field-label">
                        Last Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        isInvalid={!!errors.lastName}
                        disabled={loading}
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="field-label">
                    Email Address <span className="text-danger">*</span>
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

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label className="field-label">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    isInvalid={!!errors.phone}
                    disabled={loading}
                    className="form-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label className="field-label">
                        Password <span className="text-danger">*</span>
                      </Form.Label>
                      <div className="password-input-wrapper">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter password"
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
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                      <Form.Label className="field-label">
                        Confirm Password <span className="text-danger">*</span>
                      </Form.Label>
                      <div className="password-input-wrapper">
                        <Form.Control
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          isInvalid={!!errors.confirmPassword}
                          disabled={loading}
                          className="form-input"
                        />
                        <button
                          type="button"
                          className="password-toggle-btn"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          tabIndex="-1"
                        >
                          <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                        </button>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDateOfBirth">
                      <Form.Label className="field-label">
                        Date of Birth
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        disabled={loading}
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGender">
                      <Form.Label className="field-label">
                        Gender
                      </Form.Label>
                      <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        disabled={loading}
                        className="form-input"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formNationality">
                  <Form.Label className="field-label">
                    Nationality
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="Enter your nationality"
                    disabled={loading}
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAgreeToTerms">
                  <Form.Check
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    isInvalid={!!errors.agreeToTerms}
                    label={
                      <span>
                        I agree to the{' '}
                        <a href="/terms" target="_blank" rel="noopener noreferrer">
                          Terms and Conditions
                        </a>
                        {' '}and{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </a>
                      </span>
                    }
                    feedback={errors.agreeToTerms}
                    feedbackType="invalid"
                    className="remember-me-check"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 login-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>

                <div className="text-center mt-3">
                  <span className="no-account-text">
                    Already have an account?{' '}
                  </span>
                  <Button 
                    variant="link" 
                    className="register-link"
                    onClick={handleHomeRedirect}
                    disabled={loading}
                  >
                    Go to Home
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

export default RegisterPage;

