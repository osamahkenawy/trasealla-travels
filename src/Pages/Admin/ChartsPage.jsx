import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';
import AllApexChart from './Charts/component/AllApexChart';

const ChartsPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Apex Charts</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Charts</li>
            </ol>
          </div>
        </Col>
      </Row>

      <AllApexChart />
    </AdminLayout>
  );
};

export default ChartsPage;
