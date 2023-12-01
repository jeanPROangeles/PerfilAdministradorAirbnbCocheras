import { Row, Col, Card, CardTitle, CardBody, Table } from "reactstrap";

const Tables = () => {
  const users = [
    { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', image: '[Image]', verify: 'Yes', createdDate: '2023-01-01', lastLogin: '2023-02-01', lastLoginIp: '192.168.1.1', status: 'Active', action: '[Edit/Delete]' },
    { firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', image: '[Image]', verify: 'No', createdDate: '2023-01-15', lastLogin: '2023-02-05', lastLoginIp: '192.168.1.2', status: 'Inactive', action: '[Edit/Delete]' },
    { firstName: 'Alice', lastName: 'Johnson', email: 'alicejohnson@example.com', image: '[Image]', verify: 'Yes', createdDate: '2023-02-01', lastLogin: '2023-03-01', lastLoginIp: '192.168.1.3', status: 'Active', action: '[Edit/Delete]' },
    // ... 20 usuarios más
  ];

  // Generar usuarios adicionales
  for (let i = 4; i <= 23; i++) {
    users.push({
      firstName: `User${i}`,
      lastName: `LastName${i}`,
      email: `user${i}@example.com`,
      image: '[Image]',
      verify: i % 2 === 0 ? 'Yes' : 'No',
      createdDate: `2023-01-${i.toString().padStart(2, '0')}`,
      lastLogin: `2023-02-${i.toString().padStart(2, '0')}`,
      lastLoginIp: `192.168.1.${i}`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      action: '[Edit/Delete]'
    });
  }

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Lista de Clientes
          </CardTitle>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Image</th>
                  <th>Verify</th>
                  <th>Created Date</th>
                  <th>Last Login</th>
                  <th>Last Login IP</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.image}</td>
                    <td>{user.verify}</td>
                    <td>{user.createdDate}</td>
                    <td>{user.lastLogin}</td>
                    <td>{user.lastLoginIp}</td>
                    <td>{user.status}</td>
                    <td>{user.action}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
