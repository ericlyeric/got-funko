/* eslint-disable react/jsx-indent */
import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import data from '../../api/data';

const { user } = data;

// check context here if not logged in the redirect to the login page
const HomePage = () => (
  // first needs to process the array of characters
  //   const { user, isLoading } = useAuthContext();

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  <>
    <Container>
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {user.characters.all.length > 0
          ? user.characters.all.map((character) => (
              <Col>
                <Card>
                  <Card.Img
                    className="text-center"
                    src={character.link}
                    style={{ width: '10rem', height: 'auto' }}
                  />
                  <Card.Body>
                    <Card.Text>{character.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  </>
);
export default HomePage;
