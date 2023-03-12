import {Button, Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
import {useEffect, useState} from 'react';
import {json, Link} from 'react-router-dom';
const Dashboard = () => {
  const [formPost, setFormPost] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [idBlog, setIdBlog] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const form_blog = document.getElementById('form-blog');
  const container_form = document.getElementById('container-form');
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
  const postFormHandler = () => {
    if (formPost === 'create' || formPost === '') {
      return (
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
                <Form.Control type="file" name="image" size="sm" />
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
      );
    } else if (formPost === 'edit') {
      return (
        <Card>
          <Card.Header>Edit Post</Card.Header>
          <Card.Body>
            <Form onSubmit={postUpdateHandler} id="form-blog">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onInput={(e) => setTitle(e.target.value)} name="title" placeholder="Enter title" />
              </Form.Group>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Select image post</Form.Label>
                <Form.Control type="file" name="image" size="sm" />
                <img src={'http://127.0.0.1:8000/storage/' + image} width="200" className={'mt-3'} style={{objectFit: 'cover'}} height="150" alt="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} name="body" value={content} onChange={handleTextArea}>
                  {content}
                </Form.Control>
                <input type="hidden" name="user_id" />
              </Form.Group>
              <Button variant="warning text-white" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      );
    } else {
      return '';
    }
  };
  const postCreateHandler = () => {
    setFormPost('create');
    setTitle('');
    setImage('');
    setContent('');
    postFormHandler();
  };
  const postEditHandler = async (id) => {
    console.log('halo');
    const fetching_data = await fetch(`http://127.0.0.1:8000/api/post/${id}`, {
      method: 'GET',
    });
    const json_data = await fetching_data.json();
    setFormPost('edit');
    setTitle(json_data.data.title);
    setImage(json_data.data.image);
    setContent(json_data.data.body);
    setIdBlog(json_data.data.id);
    console.log(json_data);
    postFormHandler();
  };
  const postUpdateHandler = async (event) => {
    event.preventDefault();
    const form_data = new FormData(form_blog);
    console.log(idBlog);
    console.log(form_blog);
    const fetching_data = await fetch(`http://127.0.0.1:8000/api/post/${idBlog}?_method=PUT`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
      },
      body: form_data,
    }).catch((err) => console.log({message: err}));
    const json_data = await fetching_data.json().catch((err) => console.log({message: err}));
    if (json_data.data) {
      getDataBlog();
      postCreateHandler();
    }
  };
  const postRemoveHandler = async (id) => {
    const fetching_data = await fetch(`http://127.0.0.1:8000/api/post/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.token,
      },
    });
    const json_data = await fetching_data.json();
    if (json_data.data) {
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
          <Button variant="success" onClick={postCreateHandler.bind(this)}>
            Tambah Data
          </Button>
          <Col md={12} lg={5} id="container-form">
            {postFormHandler()}
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
                            <Link className="btn btn-warning text-white me-2" onClick={postEditHandler.bind(this, blog.id)}>
                              Edit
                            </Link>
                            <Link className="btn btn-danger text-white" onClick={postRemoveHandler.bind(this, blog.id)}>
                              Hapus
                            </Link>
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
