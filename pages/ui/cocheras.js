import { Row, Col, Card, CardTitle, CardBody, Table } from "reactstrap";

const Tables = () => {
  const garages = [
    { name: 'Garage 1', number: 1, price: '$100,000', addedBy: 'Admin', status: 'Available', createdOn: '2023-01-01', action: '[Edit/Delete]' },
    { name: 'Garage 2', number: 2, price: '$120,000', addedBy: 'Admin', status: 'Occupied', createdOn: '2023-01-02', action: '[Edit/Delete]' },
    { name: 'Garage 3', number: 3, price: '$95,000', addedBy: 'User1', status: 'Available', createdOn: '2023-01-03', action: '[Edit/Delete]' },
    // ... 20 garajes más
  ];

  // Generar garajes adicionales
  for (let i = 4; i <= 23; i++) {
    garages.push({
      name: `Garage ${i}`,
      number: i,
      price: `$${(100 + i).toLocaleString()}`,
      addedBy: i % 2 === 0 ? 'Admin' : 'User2',
      status: i % 2 === 0 ? 'Available' : 'Occupied',
      createdOn: `2023-01-${i.toString().padStart(2, '0')}`,
      action: '[Edit/Delete]'
    });
  }

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Garage Details Table
          </CardTitle>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Price</th>
                  <th>Added By</th>
                  <th>Status</th>
                  <th>Created On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {garages.map((garage, index) => (
                  <tr key={index}>
                    <td>{garage.name}</td>
                    <td>{garage.number}</td>
                    <td>{garage.price}</td>
                    <td>{garage.addedBy}</td>
                    <td>{garage.status}</td>
                    <td>{garage.createdOn}</td>
                    <td>{garage.action}</td>
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
