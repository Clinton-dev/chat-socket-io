import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

function Login() {
  return (
    <div>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control type="email" placeholder="email" />
              <Form.Control type="password" placeholder="password" />
              <Button variant="warning" type="submit">
                Login
              </Button>
              <Alert variant="danger">
                <p>This is a alert—check it out!</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
