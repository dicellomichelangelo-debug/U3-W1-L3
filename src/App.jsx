import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import BookSelector from "./components/BookSelector";
import { useState } from "react";
import fantasyBooks from "./data/fantasy.json";

function App() {
  const [currentBooks, setCurrentBooks] = useState(fantasyBooks);

  return (
    <div className="d-flex flex-column min-vh-100 bg-secondary">
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        <BookSelector CategoryChange={(books) => setCurrentBooks(books)} />
        <BookList books={currentBooks} />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
