import {Button, Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import slide1 from './../img/slide1.jpg';
const Dashboard = () => {
  return (
    <Container className="min-vh-100">
      <Row className="d-flex justify-content-center mt-4 g-2">
        <Col md={12} lg={5}>
          <Card>
            <Card.Header>Tambah Post</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="title" placeholder="Enter title" />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Select image post</Form.Label>
                  <Form.Control type="file" name="image" size="sm" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={3} name="body" />
                  <input type="hidden" name="user_id" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={7}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>
                  <img src={slide1} width="200" style={{objectFit: 'cover'}} height="150" alt="" />
                </td>
                <td>Test</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
