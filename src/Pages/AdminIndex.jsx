import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const AdminIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard when accessing /admin
    navigate('/admin/dashboard', { replace: true });
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Redirecting to admin dashboard...</p>
      </div>
    </div>
  );
};

export default AdminIndex;
