import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsHeart, BsHeartFill, BsBag, BsBagFill } from 'react-icons/bs';

const CharacterCard = ({ character }) => (
  <Card>
    <Card.Header
      className="p-2"
      title={character.name}
      style={{
        height: '2.5rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {character.name}
    </Card.Header>
    <Card.Img
      className="mx-auto d-block pt-2"
      src={character.link}
      style={{ width: '10rem', height: 'auto' }}
    />
    <Card.Body className="text-center p-2 mb-2">
      <Button className="mr-1" size="lg" type="Button">
        <BsHeart />
      </Button>
      <Button className="ml-1" size="lg" type="Button">
        <BsBag />
      </Button>
    </Card.Body>
  </Card>
);

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
