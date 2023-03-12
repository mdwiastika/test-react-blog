import {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from './../partials/Header';
import Footer from './../partials/Footer';
import './../assets/css/star.css';
const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const urlParam = useParams();
  const post_id = urlParam.id_blog;
  useEffect(() => {
    const getData = async () => {
      const fetchingData = await fetch(`http://127.0.0.1:8000/api/post/${post_id}`, {
        method: 'GET',
      });
      const jsonData = await fetchingData.json();
      setBlog(jsonData.data);
    };
    getData();
    const getStarUser = async () => {
      if (localStorage.token) {
        const fetching_data = await fetch(`http://127.0.0.1:8000/api/rating/get-rating-user/${post_id}`, {
          method: 'GET',
          headers: {
            Authorization: localStorage.token,
          },
        });
        const json_data = await fetching_data.json();
        if (json_data.data.id) {
          if (json_data.data.rating === 1) {
            console.log('star1.checked = true;');
            document.getElementById('star-1').checked = true;
          } else if (json_data.data.rating === 2) {
            console.log('star2.checked = true;');
            document.getElementById('star-2').checked = true;
          } else if (json_data.data.rating === 3) {
            console.log('star3.checked = true;');
            document.getElementById('star-3').checked = true;
          } else if (json_data.data.rating === 4) {
            console.log('star4.checked = true;');
            document.getElementById('star-4').checked = true;
          } else if (json_data.data.rating === 5) {
            console.log('star5.checked = truee;');
            document.getElementById('star-5').checked = true;
          }
        }
      }
    };
    getStarUser();
  }, [post_id]);
  const starHandler = async (rating) => {
    if (!localStorage.token) {
      navigate('/login');
    }
    const fetching_data = await fetch('http://127.0.0.1:8000/api/rating', {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({rating, post_id}),
    }).catch((err) => console.log({message: err}));
    const json_data = await fetching_data.json();
    console.log(json_data);
  };
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
                  <input class="star star-5" id="star-5" type="radio" onClick={starHandler.bind(this, 5)} name="star" />

                  <label class="star star-5" for="star-5"></label>

                  <input class="star star-4" id="star-4" type="radio" onClick={starHandler.bind(this, 4)} name="star" />

                  <label class="star star-4" for="star-4"></label>

                  <input class="star star-3" id="star-3" type="radio" onClick={starHandler.bind(this, 3)} name="star" />

                  <label class="star star-3" for="star-3"></label>

                  <input class="star star-2" id="star-2" type="radio" onClick={starHandler.bind(this, 2)} name="star" />

                  <label class="star star-2" for="star-2"></label>

                  <input class="star star-1" id="star-1" type="radio" onClick={starHandler.bind(this, 1)} name="star" />

                  <label class="star star-1" for="star-1"></label>
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
