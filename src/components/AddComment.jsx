import { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
    isLoading: false,
    isError: false,
  };

  handleInputChange = (field, value) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [field]: value,
      },
    });
  };

  sendComment = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNDczMmYwNDIwZDAwMTUxNTVhNzMiLCJpYXQiOjE3Nzc1NTExNTQsImV4cCI6MTc3ODc2MDc1NH0.8b3ewC83GtgXTHrhAxbYNhlRkNKIyq-ZNkvwpM_4gjE",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.comment),
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione inviata con successo!");
          // Resetto il form
          this.setState({
            comment: {
              comment: "",
              rate: "1",
              elementId: this.props.asin,
            },
            isLoading: false,
            isError: false,
          });
        } else {
          throw new Error("Errore nell'invio");
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  render() {
    return (
      <div className="my-3 text-dark">
        <h5>Aggiungi una recensione</h5>
        {this.state.isError && (
          <Alert variant="danger">Errore durante l'invio del commento!</Alert>
        )}

        <Form onSubmit={this.sendComment} onClick={(e) => e.stopPropagation()}>
          <Form.Group className="mb-2">
            <Form.Label>Il tuo commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi qui..."
              value={this.state.comment.comment}
              onChange={(e) =>
                this.handleInputChange("comment", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voto</Form.Label>
            <Form.Select
              value={this.state.comment.rate}
              onChange={(e) => this.handleInputChange("rate", e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={this.state.isLoading}
          >
            {this.state.isLoading ? "Invio in corso..." : "Invia Recensione"}
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
