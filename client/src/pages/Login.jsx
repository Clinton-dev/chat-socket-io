import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

import { AuthContext } from "../context/AuthContext";

import Loader from "../components/Loader";

function Login() {
  const {
    loginInfor,
    isLoginLoading,
    loginError,
    loginUser,
    updateLoginInfor,
  } = useContext(AuthContext);

  return (
    <div>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) =>
                  updateLoginInfor({ ...loginInfor, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) =>
                  updateLoginInfor({ ...loginInfor, password: e.target.value })
                }
              />

              <Button variant="warning" type="submit">
                {isLoginLoading ? <Loader color="white" /> : "Login"}
              </Button>
              {loginError?.error && (
                <Alert variant="danger">
                  <p>{loginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
