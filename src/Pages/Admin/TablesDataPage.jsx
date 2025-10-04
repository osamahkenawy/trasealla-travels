import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Card } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';
import { Grid } from 'gridjs-react';

const TablesDataPage = () => {
  // Sample data for GridJS
  const basicData = [
    ['John', 'john@example.com', '30', 'Developer'],
    ['Jane', 'jane@example.com', '25', 'Designer'],
    ['Bob', 'bob@example.com', '35', 'Manager'],
    ['Alice', 'alice@example.com', '28', 'Developer'],
    ['Charlie', 'charlie@example.com', '32', 'Analyst']
  ];

  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Data Tables</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Data Tables</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Basic Table</Card.Title>
              <p className="text-muted mb-0">
                Example of a basic data table with sorting and pagination
              </p>
            </Card.Header>
            <Card.Body>
              <Grid
                data={basicData}
                columns={['Name', 'Email', 'Age', 'Position']}
                pagination={{ limit: 5 }}
                sort={true}
                search={false}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Searchable Table</Card.Title>
              <p className="text-muted mb-0">
                Table with search functionality enabled
              </p>
            </Card.Header>
            <Card.Body>
              <Grid
                data={basicData}
                columns={['Name', 'Email', 'Age', 'Position']}
                pagination={{ limit: 5 }}
                sort={true}
                search={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default TablesDataPage;