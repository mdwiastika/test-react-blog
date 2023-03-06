import {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = (props) => {
  // post data register to laravel
  async function fetchingData(dataRegister) {
    const fetchRegister = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegister),
    }).catch((err) => console.log({message: err}));
    const jsonRegister = await fetchRegister.json().catch((err) => console.log(err));
    return jsonRegister;
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const registerHandler = async (event) => {
    event.preventDefault();
    const getDataRegister = await fetchingData({name, email, password});
    if (getDataRegister.data) {
      navigate('/login');
    } else {
      toast(getDataRegister.message);
    }
  };
  return (
    <Container className="min-vh-100">
      <ToastContainer />
      <Row className="d-flex justify-content-center mt-4">
        <Col md={12} lg={8}>
          <Card>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
              <Form onSubmit={registerHandler} method="POST">
                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control required type="text" name="name" onInput={(event) => setName(event.target.value)} value={name} placeholder="Enter fullname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" name="email" onInput={(event) => setEmail(event.target.value)} value={email} placeholder="Enter email" />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" name="password" minLength={'8'} onInput={(event) => setPassword(event.target.value)} value={password} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
                <Link className="d-block" to={'/login'}>
                  Sudah punya akun? Login di sini
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;
