import {useState} from 'react';
import {Button, Card, Col, Container, Form, Row, ToastContainer} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const fetchingLogin = async (dataLogin) => {
    const fetchingData = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataLogin),
    }).catch((err) => console.log(err));
    const jsonLogin = await fetchingData.json().catch((err) => console.log(err));
    return jsonLogin;
  };
  const postLogin = async (event) => {
    event.preventDefault();
    const getDataLogin = await fetchingLogin({email, password});
    console.log(getDataLogin);
    if (getDataLogin.token) {
      localStorage.setItem('token', getDataLogin.token);
      navigate('/');
    } else {
      toast("username or passsword doesn't match");
    }
  };
  return (
    <>
      <ToastContainer />
      <Container className="min-vh-100">
        <Row className="d-flex justify-content-center mt-4">
          <Col md={12} lg={8}>
            <Card>
              <Card.Header>{props.title}</Card.Header>
              <Card.Body>
                <Form method="POST" onSubmit={postLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onInput={(event) => setEmail(event.target.value)} value={email} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onInput={(event) => setPassword(event.target.value)} value={password} />
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
