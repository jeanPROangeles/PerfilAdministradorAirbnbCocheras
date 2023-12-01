import { Row, Col, Card, CardTitle, CardBody, Table } from "reactstrap";

const Tables = () => {
  const disputes = [
    { sNo: 1, garageName: 'Garage 1', disputeMessage: 'Issue with payment', disputeEmail: 'user1@example.com', dateAdded: '2023-01-01', action: '[Resolve/Dismiss]' },
    { sNo: 2, garageName: 'Garage 2', disputeMessage: 'Access problem', disputeEmail: 'user2@example.com', dateAdded: '2023-01-02', action: '[Resolve/Dismiss]' },
    { sNo: 3, garageName: 'Garage 3', disputeMessage: 'Maintenance required', disputeEmail: 'user3@example.com', dateAdded: '2023-01-03', action: '[Resolve/Dismiss]' },
    // ... 20 disputas más
  ];

  // Generar disputas adicionales
  for (let i = 4; i <= 23; i++) {
    disputes.push({
      sNo: i,
      garageName: `Garage ${i}`,
      disputeMessage: `Random issue ${i}`,
      disputeEmail: `user${i}@example.com`,
      dateAdded: `2023-01-${i.toString().padStart(2, '0')}`,
      action: '[Resolve/Dismiss]'
    });
  }

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Garage Dispute Details Table
          </CardTitle>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Garage Name</th>
                  <th>Dispute Message</th>
                  <th>Dispute Email</th>
                  <th>Date Added</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {disputes.map((dispute, index) => (
                  <tr key={index}>
                    <td>{dispute.sNo}</td>
                    <td>{dispute.garageName}</td>
                    <td>{dispute.disputeMessage}</td>
                    <td>{dispute.disputeEmail}</td>
                    <td>{dispute.dateAdded}</td>
                    <td>{dispute.action}</td>
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
