import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';

const Register = (props) => {
  return (
    <Container>
      <Row>
        <Col md={12} lg={8}>
          <Card>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter fullname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" min={8} name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;
