import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((c) => (
          <ListGroup.Item key={c._id}>
            {c.comment} - Voto: {c.rate}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
export default CommentList;
