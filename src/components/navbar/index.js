import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/">FORECAST</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default NavBar;
