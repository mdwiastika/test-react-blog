import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" style={{maxHeight: '500px', objectFit: 'cover'}} src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{maxHeight: '500px', objectFit: 'cover'}} src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{maxHeight: '500px', objectFit: 'cover'}} src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h1 className="d-flex justify-content-center pt-3">My Blog</h1>
        <Link className="d-flex justify-content-end text-primary fs-5 me-3 pb-1" to="/blog" style={{textDecoration: 'none'}}>
          Show more
        </Link>
        <Row className="d-flex align-items-center justify-content-center mx-auto g-">
          <Col sm={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={slide1} />
              <Card.Body>
                <Card.Title>First Card</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={slide1} />
              <Card.Body>
                <Card.Title>Second Card</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={slide1} />
              <Card.Body>
                <Card.Title>Third Card</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={slide1} />
              <Card.Body>
                <Card.Title>Fourth Card</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card border="secondary" className="pt-4 w-100  d-flex justify-content-center " style={{width: '18rem'}}>
          <Card.Header>Contact me</Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-start">
              <div>Telepon:</div>
              <div>089127812</div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Home;
