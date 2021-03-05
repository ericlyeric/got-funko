/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import CharacterCard from "../common/CharacterCard";
import { updateCharacter } from "../../api/userApi";
import FilterBy from "../common/FilterBy";
import SearchBy from "../common/SearchBy";
import filters from "../common/constants";

const HomePage = () => {
  const { user, isLoading } = useAuthContext();
  const [want, setWant] = useState([]);
  const [have, setHave] = useState([]);
  const [filterBy, setFilterBy] = useState(filters[0]);
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user.characters.want && user.characters.have) {
      setWant(user.characters.want);
      setHave(user.characters.have);
      setTotal(user.characters.all.length);
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
        user.characters.all.filter((character) => have.includes(character.id))
      );
      setTotal(have.length);
    } else if (select === filters[2]) {
      setFilterCharacters(
        user.characters.all.filter((character) => want.includes(character.id))
      );
      setTotal(want.length);
    } else if (select === filters[3]) {
      setFilterCharacters(
        user.characters.all.filter(
          (character) =>
            want.includes(character.id) || have.includes(character.id)
        )
      );
      setTotal(want.length + have.length);
    } else {
      setFilterCharacters([]);
      setTotal(user.characters.all.length);
    }
  };

  const handleSearchSelect = (e) => {
    setSearchCharacter(
      user.characters.all.filter((character) => character.name === e[0])
    );
    setFilterCharacters([]);
    setTotal(1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col className="mt-2" md={4} lg={3}>
            <FilterBy filterBy={filterBy} onSelect={handleFilterSelect} />
          </Col>
          <Col className="mt-2" md={8} lg={9}>
            <SearchBy
              options={user.characters.all.map((character) => character.name)}
              onChange={handleSearchSelect}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <span className="text-nowrap">
              Total Pop(s): <b>{total}</b>
            </span>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="row mt-3 row-cols-2 row-cols-md-4">
          {user.characters.all.length > 0 &&
          filterBy === filters[0] &&
          searchCharacter.length < 1
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
            : null}
          {searchCharacter.length > 0
            ? searchCharacter.map((character) => (
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
            : null}
          {filterCharacters.length > 0 && searchCharacter.length < 1
            ? filterCharacters.map((character) => (
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
            : null}
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
