/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import CharacterCard from '../common/CharacterCard';
import { updateCharacter } from '../../api/userApi';
import FilterBy from '../common/FilterBy';
import filters from '../common/constants';

const HomePage = () => {
  const { user, isLoading } = useAuthContext();
  const [want, setWant] = useState([]);
  const [have, setHave] = useState([]);
  const [filterBy, setFilterBy] = useState(filters[0]);
  const [filterCharacters, setFilterCharacters] = useState([]);

  useEffect(() => {
    if (user.characters.want && user.characters.have) {
      setWant(user.characters.want);
      setHave(user.characters.have);
    }
  }, []);

  const handleWant = (char) => {
    let newWant = want;
    if (want.includes(char.id)) {
      newWant = want.filter((elm) => elm !== char.id);
      setWant(newWant);
    } else {
      newWant = [...want, char.id];
      setWant(newWant);
    }
    updateCharacter({
      username: user.name,
      want: newWant,
      have,
    });
  };

  const handleHave = (char) => {
    let newHave = have;
    if (have.includes(char.id)) {
      newHave = have.filter((elm) => elm !== char.id);
      setHave(newHave);
    } else {
      newHave = [...newHave, char.id];
      setHave(newHave);
    }
    updateCharacter({
      username: user.name,
      want,
      have: newHave,
    });
  };

  const handleFilterSelect = (select) => {
    setFilterBy(filters[filters.findIndex((filter) => filter === select)]);
    if (select === filters[1]) {
      setFilterCharacters(
        user.characters.all.filter((character) => have.includes(character.id)),
      );
    } else if (select === filters[2]) {
      setFilterCharacters(
        user.characters.all.filter((character) => want.includes(character.id)),
      );
    } else if (select === filters[3]) {
      setFilterCharacters(
        user.characters.all.filter(
          (character) =>
            want.includes(character.id) || have.includes(character.id),
        ),
      );
    } else {
      setFilterCharacters([]);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col>
            <FilterBy filterBy={filterBy} onSelect={handleFilterSelect} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="row mt-3 row-cols-2 row-cols-md-4">
          {user.characters.all.length > 0 && filterBy === filters[0]
            ? user.characters.all.map((character) => (
                <Col key={character.id}>
                  <CharacterCard
                    character={character}
                    have={have}
                    want={want}
                    onWant={handleWant}
                    onHave={handleHave}
                  />
                </Col>
              ))
            : filterCharacters.map((character) => (
                <Col key={character.id}>
                  <CharacterCard
                    character={character}
                    have={have}
                    want={want}
                    onWant={handleWant}
                    onHave={handleHave}
                  />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
