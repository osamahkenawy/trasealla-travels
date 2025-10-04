import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';
import { allTables } from './Tables/basic/data';

const TablesBasicPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">Basic Tables</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">Basic Tables</li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row>
        {allTables.map((table, idx) => (
          <Col lg={12} key={idx}>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">{table.title}</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className={table.variant}>
                    <thead>
                      <tr>
                        {table.headers.map((header, headerIdx) => (
                          <th key={headerIdx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.data.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </AdminLayout>
  );
};

export default TablesBasicPage;
