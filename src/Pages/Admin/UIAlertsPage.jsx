import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Alert } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const UIAlertsPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Alerts</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Alerts</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Alert Examples</h4>
            </div>
            <div className="card-body">
              <Alert variant="primary">
                This is a primary alert—check it out!
              </Alert>
              <Alert variant="secondary">
                This is a secondary alert—check it out!
              </Alert>
              <Alert variant="success">
                This is a success alert—check it out!
              </Alert>
              <Alert variant="danger">
                This is a danger alert—check it out!
              </Alert>
              <Alert variant="warning">
                This is a warning alert—check it out!
              </Alert>
              <Alert variant="info">
                This is an info alert—check it out!
              </Alert>
            </div>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default UIAlertsPage;
