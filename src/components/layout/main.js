import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ content }) => {
  return (
    <div className="main">
      {content}
    </div>
  );
};

Main.propTypes = {
  content: PropTypes.any.isRequired,
};

export default Main;
