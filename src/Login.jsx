import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = (props) => {
  return (
    <>
      <Container className="min-vh-100">
        <Row className="d-flex justify-content-center mt-4">
          <Col md={12} lg={8}>
            <Card>
              <Card.Header>{props.title}</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <Link className="d-block" to={'/register'}>
                    Belum punya akun? Daftar di sini
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
