import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../Components/Admin/AdminLayout';
import IconifyIcon from '../Components/Admin/wrapper/IconifyIcon';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Dashboard</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24, paddingRight: '8px' }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </Col>
      </Row>
      
      {/* Stats Cards */}
      <Row>
        <Col md={6} xl={3}>
          <div className="card">
            <div className="card-body">
              <Row>
                <Col xs={6}>
                  <div className="avatar-md bg-primary bg-opacity-10 rounded-circle">
                    <IconifyIcon
                      icon="solar:globus-outline"
                      className="text-primary avatar-title"
                      style={{ padding: '12px' }}
                    />
                  </div>
                </Col>
                <Col xs={6} className="text-end">
                  <p className="text-muted mb-0 text-truncate">Tours</p>
                  <h3 className="text-dark mt-2 mb-0">1,452</h3>
                </Col>
              </Row>
            </div>
            <div className="card-footer border-0 py-2 bg-light bg-opacity-50 mx-2 mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-success">
                    <IconifyIcon icon="bxs:up-arrow" className="bx fs-12" style={{ marginBottom: '3px' }} /> 3.02%
                  </span>
                  <span className="text-muted ms-1 fs-12">From last month</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col md={6} xl={3}>
          <div className="card">
            <div className="card-body">
              <Row>
                <Col xs={6}>
                  <div className="avatar-md bg-success bg-opacity-10 rounded-circle">
                    <IconifyIcon
                      icon="solar:bag-check-outline"
                      className="text-success avatar-title"
                      style={{ padding: '12px' }}
                    />
                  </div>
                </Col>
                <Col xs={6} className="text-end">
                  <p className="text-muted mb-0 text-truncate">Bookings</p>
                  <h3 className="text-dark mt-2 mb-0">3,254</h3>
                </Col>
              </Row>
            </div>
            <div className="card-footer border-0 py-2 bg-light bg-opacity-50 mx-2 mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-success">
                    <IconifyIcon icon="bxs:up-arrow" className="bx fs-12" style={{ marginBottom: '3px' }} /> 5.27%
                  </span>
                  <span className="text-muted ms-1 fs-12">From last month</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col md={6} xl={3}>
          <div className="card">
            <div className="card-body">
              <Row>
                <Col xs={6}>
                  <div className="avatar-md bg-info bg-opacity-10 rounded-circle">
                    <IconifyIcon
                      icon="solar:users-group-rounded-outline"
                      className="text-info avatar-title"
                      style={{ padding: '12px' }}
                    />
                  </div>
                </Col>
                <Col xs={6} className="text-end">
                  <p className="text-muted mb-0 text-truncate">Users</p>
                  <h3 className="text-dark mt-2 mb-0">1,234</h3>
                </Col>
              </Row>
            </div>
            <div className="card-footer border-0 py-2 bg-light bg-opacity-50 mx-2 mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-success">
                    <IconifyIcon icon="bxs:up-arrow" className="bx fs-12" style={{ marginBottom: '3px' }} /> 2.15%
                  </span>
                  <span className="text-muted ms-1 fs-12">From last month</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col md={6} xl={3}>
          <div className="card">
            <div className="card-body">
              <Row>
                <Col xs={6}>
                  <div className="avatar-md bg-warning bg-opacity-10 rounded-circle">
                    <IconifyIcon
                      icon="solar:dollar-outline"
                      className="text-warning avatar-title"
                      style={{ padding: '12px' }}
                    />
                  </div>
                </Col>
                <Col xs={6} className="text-end">
                  <p className="text-muted mb-0 text-truncate">Revenue</p>
                  <h3 className="text-dark mt-2 mb-0">$45,678</h3>
                </Col>
              </Row>
            </div>
            <div className="card-footer border-0 py-2 bg-light bg-opacity-50 mx-2 mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-danger">
                    <IconifyIcon icon="bxs:down-arrow" className="bx fs-12" style={{ marginBottom: '3px' }} /> 1.08%
                  </span>
                  <span className="text-muted ms-1 fs-12">From last month</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Recent Bookings Table */}
      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Recent Bookings</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Customer</th>
                      <th>Tour</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#BK001</td>
                      <td>John Doe</td>
                      <td>Egypt Pyramids Tour</td>
                      <td>2024-01-15</td>
                      <td>
                        <span className="badge bg-success">Confirmed</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary">View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>#BK002</td>
                      <td>Jane Smith</td>
                      <td>Dubai City Tour</td>
                      <td>2024-01-16</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary">View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>#BK003</td>
                      <td>Mike Johnson</td>
                      <td>Paris Adventure</td>
                      <td>2024-01-17</td>
                      <td>
                        <span className="badge bg-success">Confirmed</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default AdminDashboard;