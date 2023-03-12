import {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
import './../assets/css/star.css';
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
              <div class="container d-flex justify-content-center mt-200">
                <div class="stars">
                  <form action="">
                    <input class="star star-5" id="star-5" type="radio" name="star" />

                    <label class="star star-5" for="star-5"></label>

                    <input class="star star-4" id="star-4" type="radio" name="star" />

                    <label class="star star-4" for="star-4"></label>

                    <input class="star star-3" id="star-3" type="radio" name="star" />

                    <label class="star star-3" for="star-3"></label>

                    <input class="star star-2" id="star-2" type="radio" name="star" />

                    <label class="star star-2" for="star-2"></label>

                    <input class="star star-1" id="star-1" type="radio" name="star" />

                    <label class="star star-1" for="star-1"></label>
                  </form>
                </div>
              </div>
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
