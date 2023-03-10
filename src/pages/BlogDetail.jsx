import {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  var urlParam = useParams();
  useEffect(() => {
    const getData = async () => {
      const fetchingData = await fetch(`http://127.0.0.1:8000/api/post/${urlParam.id_blog}`, {
        method: 'GET',
      });
      const jsonData = await fetchingData.json();
      setBlog(jsonData.data);
    };
    getData();
  }, []);
  if (!localStorage.token) {
    navigate('/login');
  }
  return (
    <>
      <Header></Header>
      <Container>
        <Row className="mt-4 d-flex justify-content-center">
          <Col md={12} lg={11}>
            <Card body>
              <h2 className="text-center">{blog.title}</h2>
              <img src={'http://127.0.0.1:8000/storage/' + blog.image} className="img-fluid rounded-2" alt="gambar-blog" />
              <p>{blog.body}</p>
              <Link to={'/blog'}>
                <Button variant="danger">Kembali</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default BlogDetail;
