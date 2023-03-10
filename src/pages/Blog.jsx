import slide1 from './../img/slide1.jpg';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './../assets/css/box.css';
import {useEffect, useState} from 'react';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAllBlog = async () => {
      const fetchingData = await fetch('http://127.0.0.1:8000/api/post', {
        method: 'GET',
      }).catch((err) => console.log(err));
      const jsonData = await fetchingData.json().catch((err) => console.log(err));
      console.log(jsonData);
      setBlogs(jsonData.data);
      setLoading(false);
    };
    fetchAllBlog();
  }, []);
  return (
    <>
      <Header></Header>
      <Container className="min-vh-100">
        <h2 className="d-flex justify-content-center text-primary mt-4 mb-2 fw-bold">Main Blog</h2>
        <Row>
          <Col>
            <Container className="py-2">
              <article className="postcard light red">
                <Link className="postcard__img_link">
                  <img className="postcard__img" src={slide1} alt="main-blog" />
                </Link>
                <div className="postcard__text t-dark">
                  <h1 className="postcard__title red">
                    <Link>Podcast Title</Link>
                  </h1>
                  <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora
                    reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item play red">
                      <Link>
                        <i className="fas fa-play mr-2">Sports</i>
                      </Link>
                    </li>
                    <li className="tag__item play red">
                      <Link>
                        <i className="fas fa-play mr-2">Hot</i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </Container>
          </Col>
        </Row>
        <h2 className="d-flex justify-content-center text-primary mt-4 mb-2 fw-bold">All Blog</h2>
        <Row className="d-flex align-items-center justify-content-center mx-auto g-3">
          {loading ? (
            <h2>Loading Article...</h2>
          ) : (
            <>
              {blogs.map((blog) => {
                return (
                  <Col sm={12} md={4} lg={3}>
                    <Card>
                      <Card.Img variant="top" src={'http://127.0.0.1:8000/storage/' + blog.image} />
                      <Card.Body className="text-dark">
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.limit_post}</Card.Text>
                        <Button variant="primary">
                          <Link to={`/blog/${blog.id}`} className="text-white">
                            Baca Selengkapnya
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default Blog;
