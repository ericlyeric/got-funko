import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';

const CharacterCard = ({ character, have, want, handleWant }) => (
  <Card className="mb-3">
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
      <button
        className="mr-1"
        type="button"
        style={{ background: 'white', border: 'none' }}
        onClick={() => handleWant(character)}
      >
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          color={want.includes(character.id) ? 'red' : 'grey'}
        />
      </button>
      <button
        className="ml-1"
        type="button"
        style={{ background: 'white', border: 'none' }}
        onClick={() => console.log('test2')}
      >
        <FontAwesomeIcon
          icon={faCheck}
          size="2x"
          color={have.includes(character.id) ? 'green' : 'grey'}
        />
      </button>
    </Card.Body>
  </Card>
);

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  have: PropTypes.arrayOf(PropTypes.number).isRequired,
  want: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleWant: PropTypes.func.isRequired,
};
