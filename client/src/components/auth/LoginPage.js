import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../../api/authApi';
import { useAuthContext } from '../../context/AuthContext';
import Message from '../common/Message';

const LoginPage = () => {
  const history = useHistory();
  const authContext = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData).then((data) => {
      const { isAuthenticated, user, message: msg } = data;
      if (isAuthenticated) {
        setSubmitting(true);
        authContext.setUser(user);
        authContext.setIsAuth(isAuthenticated);
        history.push('/');
      } else {
        setMessage(msg);
      }
    });
    setSubmitting(false);
  };

  return (
    <Container className="align-items-center">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center pt-5 pb-5">
          <Col xs={7}>
            <Form.Group>
              <h1 className="h3 mb-3 fw-normal">Please log in</h1>
              <Form.Label srOnly>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                required
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label srOnly>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Use username test and password test if you are a vistor
              </Form.Text>
            </Form.Group>
            <Button className="w-100" type="submit" onClick={handleSubmit}>
              {submitting ? 'Logging in ...' : 'Log in'}
            </Button>
          </Col>
        </Row>
      </Form>
      {message ? <Message message={message} /> : null}
    </Container>
  );
};

export default LoginPage;
