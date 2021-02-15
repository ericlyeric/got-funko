/* eslint-disable react/jsx-indent */
import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import CharacterCard from '../common/CharacterCard';
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
      <Row className="row mt-3 row-cols-2 row-cols-md-4">
        {user.characters.all.length > 0
          ? user.characters.all.map((character) => (
              <Col>
                <CharacterCard character={character} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  </>
);
export default HomePage;
