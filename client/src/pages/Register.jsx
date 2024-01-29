import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

import { AuthContext } from "../context/AuthContext";

function Register() {
  const { registerInfor, updateRegisterInfor, registerUser, registerError } =
    useContext(AuthContext);
  return (
    <div>
      <Form onSubmit={() => registerUser(registerInfor)}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  updateRegisterInfor({
                    ...registerInfor,
                    name: e.target.value,
                  })
                }
              />
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) =>
                  updateRegisterInfor({
                    ...registerInfor,
                    email: e.target.value,
                  })
                }
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) =>
                  updateRegisterInfor({
                    ...registerInfor,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="warning" type="submit">
                Register
              </Button>
              {registerError && (
                <Alert variant="danger">
                  <p>{registerError}</p>
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
