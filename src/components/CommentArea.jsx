import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNDczMmYwNDIwZDAwMTUxNTVhNzMiLCJpYXQiOjE3Nzc1NTExNTQsImV4cCI6MTc3ODc2MDc1NH0.8b3ewC83GtgXTHrhAxbYNhlRkNKIyq-ZNkvwpM_4gjE",
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((data) => {
        this.setState({
          comments: data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error("Errore:", err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  render() {
    return (
      <div className="mt-3 text-dark">
        <h6>Recensioni:</h6>

        {this.state.isLoading && (
          <Spinner animation="border" variant="primary" />
        )}

        {this.state.isError && (
          <Alert variant="danger">
            Si è verificato un errore nel caricamento dei commenti.
          </Alert>
        )}

        <AddComment asin={this.props.asin} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
