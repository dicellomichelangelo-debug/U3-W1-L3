import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-center my-3">
            <Col md={8}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Cerca un libro..."
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
          <Row>
            {this.props.books
              .filter((b) =>
                b.title
                  .toLowerCase()
                  .includes(this.state.searchQuery.toLowerCase()),
              )
              .map((b) => (
                <Col xs={12} md={6} lg={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedAsin={this.state.selectedAsin}
                    changeSelectedAsin={(asin) =>
                      this.setState({ selectedAsin: asin })
                    }
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
