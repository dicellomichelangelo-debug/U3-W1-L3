import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <Alert variant="success" className="m-2">
      <Alert.Heading>Hey, Welcome to Epi-Books</Alert.Heading>
      <hr />
      <p className="mb-0">The paradise of Books</p>
    </Alert>
  );
};

export default Welcome;
