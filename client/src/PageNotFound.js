import React from 'react';
import { Container, Button } from 'react-bootstrap';

const PageNotFound = () => (
  <Container className="text-center pt-5 pb-5">
    <h1>404 page not found</h1>
    <p>The page you are trying to visit could not be found</p>
    <Button>Go to homepage</Button>
  </Container>
);

export default PageNotFound;
