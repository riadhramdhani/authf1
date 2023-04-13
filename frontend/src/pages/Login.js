import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container className="mt-5">
      <h2 className="shadow-sm p-3 m-5 text-center">Login</h2>

      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary w-100 mb-3" type="submit">
              Login
            </Button>
          </Form>
          <p>
            Don't have an account ? <Link>Sign up</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
