import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    if (!this.props.asin) return;
    this.setState({ isLoading: true, isError: false });
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
        {!this.props.asin ? (
          <Alert variant="info">
            Seleziona un libro per visualizzare i commenti
          </Alert>
        ) : (
          <>
            {this.state.isLoading && (
              <Spinner animation="border" variant="primary" />
            )}

            {this.state.isError && (
              <Alert variant="danger">
                Errore nel caricamento dei commenti.
              </Alert>
            )}
            <AddComment
              asin={this.props.asin}
              onCommentAdded={this.fetchComments}
            />
            <h6>Recensioni per per il libro: {this.props.asin}</h6>
            <CommentList comments={this.state.comments} />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;
