import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faHeart} size="2x" />
      <FontAwesomeIcon icon={faCheck} size="2x" />
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
