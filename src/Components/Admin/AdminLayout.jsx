import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavigationBar from './layout/TopNavigationBar/page';
import VerticalNavigationBar from './layout/VerticalNavigationBar/page';
import Footer from './layout/Footer';
import '../../assets/admin.scss'; // Import admin styles

const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <TopNavigationBar />
      <VerticalNavigationBar />
      <div className="page-content">
        <Container fluid>
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;