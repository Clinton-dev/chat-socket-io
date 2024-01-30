import { useContext } from "react";
import { Container, Nav, Navbar as NavbarBs, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <NavbarBs bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            Chattapp
          </Link>
        </h2>
        {user && (
          <span className="text-warning">Logged in as {user?.name}</span>
        )}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user ? (
              <Link
                to="/login"
                onClick={logoutUser}
                className="link-light text-decoration-none"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
