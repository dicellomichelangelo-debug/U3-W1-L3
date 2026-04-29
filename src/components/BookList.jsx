import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container fluid>
      <Row className="justify-content-center my-3">
        <Col md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {props.books
          .filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((b) => (
            <Col xs={12} md={6} lg={3} key={b.asin}>
              <SingleBook book={b} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
