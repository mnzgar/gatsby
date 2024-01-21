import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.any.isRequired,
};

export default Header;
