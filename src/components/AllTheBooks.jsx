import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/scifi.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row>
        {books.map((book) => {
          return (
            <Col xs={12} md={4} lg={3} key={book.asin} className="mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}$</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
