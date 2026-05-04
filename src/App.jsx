import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import BookSelector from "./components/BookSelector";
import fantasyBooks from "./data/fantasy.json";

class App extends Component {
  state = {
    currentBooks: fantasyBooks,
  };

  handleCategoryChange = (books) => {
    this.setState({ currentBooks: books });
  };

  render() {
    return (
      <div className="d-flex flex-column min-vh-100 bg-secondary">
        <MyNav />
        <main className="flex-grow-1">
          <Welcome />
          <BookSelector CategoryChange={this.handleCategoryChange} />
          <BookList books={this.state.currentBooks} />
        </main>
        <MyFooter />
      </div>
    );
  }
}

export default App;
