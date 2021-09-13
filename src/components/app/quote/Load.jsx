import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) =>  { 
  <>
    <button onClick={onClick} aria-label="Get a Simpsons Quote">Get a Quote</button>
  </>;
};

Load.propTypes = {
  onClick: PropTypes.func.isRequired
}