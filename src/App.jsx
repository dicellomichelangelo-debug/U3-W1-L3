import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 bg-secondary">
        <Welcome />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
