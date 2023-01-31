import React from 'react';
import './Card.css';

const Card = React.memo(({children}) =>
  <div className='Card'>
    {children}
  </div>
)

export default Card;