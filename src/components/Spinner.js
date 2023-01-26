import React from 'react';
import './Spinner.css';

const Spinner = props => {
  const outerDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div style={outerDivStyle}>
      <div className='loader'></div>
    </div>
  );
}

export default Spinner;