import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

import Loader from "../components/Loader";

import { AuthContext } from "../context/AuthContext";

function Register() {
  const {
    registerInfor,
    updateRegisterInfor,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <div>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  updateRegisterInfor({
                    ...registerInfor,
                    name: e.target.value,
                  });
                }}
              />
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => {
                  updateRegisterInfor({
                    ...registerInfor,
                    email: e.target.value,
                  });
                }}
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => {
                  updateRegisterInfor({
                    ...registerInfor,
                    password: e.target.value,
                  });
                }}
              />
              <Button variant="warning" type="submit">
                {isRegisterLoading ? <Loader color="white" /> : "Register"}
              </Button>
              {registerError?.error && (
                <Alert variant="danger">
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
