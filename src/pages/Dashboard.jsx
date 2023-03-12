import {Button, Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const form_blog = document.getElementById('form-blog');
  const postBlog = async (event) => {
    event.preventDefault();
    const form_data = new FormData(form_blog);
    const fetching_data = await fetch('http://127.0.0.1:8000/api/post', {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
      },
      body: form_data,
    });
    const json_data = await fetching_data.json();
    if (json_data.data) {
      setTitle('');
      setImage('');
      setContent('');
      getDataBlog();
    }
  };
  const handleTextArea = (e) => {
    setContent(e.target.value);
  };
  const getDataBlog = async () => {
    const fetching_data = await fetch('http://127.0.0.1:8000/api/post', {
      method: 'GET',
    }).catch((err) => console.log({message: err}));
    const json_data = await fetching_data.json();
    setBlogs(json_data.data);
    setLoading(false);
  };
  useEffect(() => {
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
                <Form onSubmit={postBlog} id="form-blog">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onInput={(e) => setTitle(e.target.value)} name="title" placeholder="Enter title" />
                  </Form.Group>
                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Select image post</Form.Label>
                    <Form.Control type="file" name="image" size="sm" value={image} onInput={(e) => setImage(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} name="body" value={content} onChange={handleTextArea}>
                      {content}
                    </Form.Control>
                    <input type="hidden" name="user_id" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Tambah
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
                {loading ? (
                  'Masih loading...'
                ) : (
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
                )}
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
