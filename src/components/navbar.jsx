import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ padding: 0, margin: 0, borderRadius: 5 }}>
        <Container style={{ padding: 0, margin: 0 }}>
          <Navbar.Brand as={Link} to="/">
            <img src="/SrdtLogo.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
