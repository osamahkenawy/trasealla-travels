import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Card } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const UICardsPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Cards</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Cards</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6} xl={3}>
          <Card>
            <Card.Body>
              <Card.Title>Simple Card</Card.Title>
              <Card.Text>
                This is a simple card with just text content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={3}>
          <Card>
            <Card.Header>
              <Card.Title as="h5" className="mb-0">Card with Header</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                This card has a header section.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={3}>
          <Card className="border-primary">
            <Card.Body>
              <Card.Title>Primary Border</Card.Title>
              <Card.Text>
                This card has a colored border.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={3}>
          <Card className="bg-primary text-white">
            <Card.Body>
              <Card.Title>Colored Card</Card.Title>
              <Card.Text>
                This card has a background color.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default UICardsPage;
