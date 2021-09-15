import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) =>  ( 
  <>
    <button onClick={onClick} aria-label="Get a Simpsons quote">Get a Simpsons quote</button>
  </>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;
