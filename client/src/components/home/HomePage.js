/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import CharacterCard from '../common/CharacterCard';
import data from '../../api/data';
import { updateCharacter } from '../../api/userApi';

// const { user } = data;

const HomePage = () => {
  const { user, isLoading } = useAuthContext();
  const [want, setWant] = useState([]);
  const [have, setHave] = useState([]);

  useEffect(() => {
    if (user.characters.want && user.characters.have) {
      setWant(user.characters.want);
      setHave(user.characters.have);
    }
  }, [user, want, have]);

  const handleWant = (char) => {
    let newWant = want;
    if (want.includes(char.id)) {
      newWant = want.filter((elm) => elm !== char.id);
      setWant(newWant);
    } else {
      newWant = [...want, char.id];
      setWant(newWant);
    }
    updateCharacter({ username: user.name, want: newWant, have: [] }).then(
      (newData) => {
        console.log(newData);
      },
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <Row className="row mt-3 row-cols-2 row-cols-md-4">
          {user.characters.all.length > 0
            ? user.characters.all.map((character) => (
                <Col>
                  <CharacterCard
                    character={character}
                    have={have}
                    want={want}
                    handleWant={handleWant}
                  />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
