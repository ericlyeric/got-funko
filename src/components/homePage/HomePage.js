import React from 'react';
import Logo from '../../../assets/got-funko-logo.png';

const styleCenter = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5rem',
  width: '30rem',
};

const Home = () => {
  return (
    <>
      <img
        className="logo"
        src={Logo}
        alt="got-funko-logo"
        style={styleCenter}
      />
    </>
  );
};

export default Home;
