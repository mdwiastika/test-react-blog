import {useEffect, useState} from 'react';
import {Navbar, Container, Nav, Form, Button, NavDropdown} from 'react-bootstrap';
import {Link, NavLink, useNavigate} from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const postLogout = async () => {
    const fetchingData = await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
      },
    }).catch((err) => console.log(err));
    const jsonData = await fetchingData.json().catch((err) => console.log(err));
    return jsonData;
  };
  const formLogout = async (event) => {
    event.preventDefault();
    const dataLogout = await postLogout();
    console.log(dataLogout);
    localStorage.removeItem('token');
    console.log('berhasil logout');
    navigate('/login');
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const fetching_data = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          Authorization: localStorage.token,
          'Content-Type': 'application/json',
        },
      });
      const json_data = await fetching_data.json();
      setUser(json_data);
    };
    getUserInfo();
  }, []);
  return (
    <Navbar bg="white" style={{borderBottom: '2px solid black', position: 'sticky', top: '0', zIndex: '99'}} className="p-3" expand="lg">
      <Container>
        <Navbar.Brand>
          <h4 className="text-primary font-bold">MarcelBlog</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-6 me-3">
            <Nav.Link as={NavLink} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              ABOUT
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {localStorage.token ? (
                <>
                  <NavDropdown.Item>
                    {user.name} ({user.role})
                  </NavDropdown.Item>
                  {user.role === 'admin' ? (
                    <NavDropdown.Item>
                      <Link to={'/dashboard'}>Dashboard</Link>
                    </NavDropdown.Item>
                  ) : (
                    ''
                  )}
                  <Form onSubmit={formLogout} method="POST">
                    <button type="submit" style={{marginLeft: '10px', backgroundColor: 'transparent', border: 'none'}} className="text-danger">
                      Logout
                    </button>
                  </Form>
                </>
              ) : (
                <NavDropdown.Item>
                  <Link to={'/login'}>Login</Link>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
