import React, { useState } from 'react';
import { Link } from 'react-router';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const UIModalsPage = () => {
  const [show, setShow] = useState(false);

  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Modals</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Modals</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Modal Examples</h4>
            </div>
            <div className="card-body">
              <Button variant="primary" onClick={() => setShow(true)}>
                Launch Modal
              </Button>

              <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This is a simple modal example with Bootstrap and React.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => setShow(false)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default UIModalsPage;
