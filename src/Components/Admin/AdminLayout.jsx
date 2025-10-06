import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavigationBar from './layout/TopNavigationBar/page';
import VerticalNavigationBar from './layout/VerticalNavigationBar/page';
import Footer from './layout/Footer';
import '../../assets/admin.scss'; // Import admin styles

const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNavigationBar />
      <VerticalNavigationBar />
      <div className="page-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Container fluid style={{ flex: 1 }}>
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;