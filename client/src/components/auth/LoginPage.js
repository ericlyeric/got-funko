import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

const LoginPage = () => (
  <Container className="align-items-center">
    <Form>
      <Row className="justify-content-md-center pt-5 pb-5">
        <Col xs={7}>
          <Form.Group>
            <h1 className="h3 mb-3 fw-normal">Please log in</h1>
            <Form.Label srOnly>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" required />
          </Form.Group>
          <Form.Group>
            <Form.Label srOnly>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Text className="text-muted">
              Use username test and password test if you are a vistor
            </Form.Text>
          </Form.Group>
          <Button className="w-100" type="submit">
            Log In
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

export default LoginPage;
