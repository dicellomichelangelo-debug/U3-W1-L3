import { Form } from "react-bootstrap";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
const allBooks = { fantasy, history, horror, romance, scifi };

const BookSelector = ({ CategoryChange }) => {
  return (
    <div className="d-flex justify-content-center my-3">
      <Form.Group className="w-25">
        <Form.Label className="text-white">Seleziona Categoria</Form.Label>
        <Form.Select
          onChange={(e) => {
            const selectedKey = e.target.value;
            CategoryChange(allBooks[selectedKey]);
          }}
        >
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default BookSelector;
