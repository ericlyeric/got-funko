import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li id="homepage">
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default Navigation;
