import React from "react";
import { Container, Nav, Navbar as NavbarBs, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            Chattapp
          </Link>
        </h2>
        <span className="text-warning">Logged in as Clint</span>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="link-light text-decoration-none">
              Login
            </Link>
            <Link to="/login" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
