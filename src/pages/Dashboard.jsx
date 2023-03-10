import {Button, Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getDataBlog = async () => {
      const fetching_data = await fetch('http://127.0.0.1:8000/api/post', {
        method: 'GET',
      }).catch((err) => console.log({message: err}));
      const json_data = await fetching_data.json();
      setBlogs(json_data.data);
    };
    getDataBlog();
  }, []);
  return (
    <>
      <Header></Header>
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
                <>
                  {blogs.map((blog, key) => {
                    return (
                      <tr>
                        <td>{key + 1}</td>
                        <td>{blog.title}</td>
                        <td>
                          <img src={'http://127.0.0.1:8000/storage/' + blog.image} width="200" style={{objectFit: 'cover'}} height="150" alt="" />
                        </td>
                        <td>
                          <Link className="btn btn-warning text-white me-2">Edit</Link>
                          <Link className="btn btn-danger text-white">Hapus</Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default Dashboard;
