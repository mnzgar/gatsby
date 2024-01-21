import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ title }) => {
  return (
    <footer>
      <p>2024 &copy; {title}</p>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.any.isRequired,
};

export default Footer;
