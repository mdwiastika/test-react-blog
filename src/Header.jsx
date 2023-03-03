import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="white" style={{boxShadow: '0px 1px 5px black', borderBottom: '1px solid black'}} className="p-3" expand="lg">
      <Container>
        <Navbar.Brand>MarcelBlog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-6">
            <Nav.Link as={NavLink} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              ABOUT
            </Nav.Link>
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
