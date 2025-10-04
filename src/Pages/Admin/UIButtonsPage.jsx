import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const UIButtonsPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Buttons</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Buttons</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Button Examples</h4>
            </div>
            <div className="card-body">
              <h5>Default Buttons</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-light">Light</button>
                <button className="btn btn-dark">Dark</button>
              </div>

              <h5>Outline Buttons</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button className="btn btn-outline-primary">Primary</button>
                <button className="btn btn-outline-secondary">Secondary</button>
                <button className="btn btn-outline-success">Success</button>
                <button className="btn btn-outline-danger">Danger</button>
                <button className="btn btn-outline-warning">Warning</button>
                <button className="btn btn-outline-info">Info</button>
                <button className="btn btn-outline-dark">Dark</button>
              </div>

              <h5>Button Sizes</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button className="btn btn-primary btn-lg">Large</button>
                <button className="btn btn-primary">Default</button>
                <button className="btn btn-primary btn-sm">Small</button>
              </div>

              <h5>Rounded Buttons</h5>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary rounded-pill">Primary</button>
                <button className="btn btn-success rounded-pill">Success</button>
                <button className="btn btn-danger rounded-pill">Danger</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default UIButtonsPage;
