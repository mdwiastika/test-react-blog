import {Navbar, Container, Nav, Form, Button, NavDropdown} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
const Header = () => {
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
            <Nav.Link as={NavLink} to="/login">
              LOGIN
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={'/login'}>Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={'/dashboard'}>Dashboard</Link>
              </NavDropdown.Item>
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
