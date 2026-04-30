import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          border: this.state.selected ? "3px solid red" : "none",
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
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Card>
    );
  }
}

export default SingleBook;
