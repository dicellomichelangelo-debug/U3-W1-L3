import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card
        onClick={() => this.props.changeSelectedAsin(this.props.book.asin)}
        style={{
          border:
            this.props.selectedAsin === this.props.book.asin
              ? "3px solid red"
              : "none",
          cursor: "pointer",
        }}
        className="mb-3"
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column bg-warning">
          <Card.Title className="flex-grow-1">
            {this.props.book.title}
          </Card.Title>
          <Card.Text>{this.props.book.price}$</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
