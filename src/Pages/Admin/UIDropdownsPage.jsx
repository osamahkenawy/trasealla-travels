import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Dropdown } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const UIDropdownsPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Dropdowns</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Dropdowns</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Dropdown Examples</h4>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                <Dropdown>
                  <Dropdown.Toggle variant="primary">
                    Primary Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    Success Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="danger">
                    Danger Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default UIDropdownsPage;
