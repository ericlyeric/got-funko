import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const getStyle = (messageStyle) => {
    if (messageStyle.error) {
      return 'danger';
    }
    return 'success';
  };

  return <Alert variant={getStyle(message)}>{message.body}</Alert>;
};

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};

export default Message;
