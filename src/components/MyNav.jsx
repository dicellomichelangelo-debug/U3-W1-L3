import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = function () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="flex-grow-1 fs-3">
            Epi-Books
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
