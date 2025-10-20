// API Configuration
const API_CONFIG = {
  // Base URL for API calls
  BASE_URL: 'https://trasealla.com/api',
  
  // API endpoints
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      FORGOT_PASSWORD: '/auth/forgot-password',
      REFRESH_TOKEN: '/auth/refresh',
      LOGOUT: '/auth/logout'
    }
  }
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Export configuration
export { API_CONFIG };
export default API_CONFIG;
