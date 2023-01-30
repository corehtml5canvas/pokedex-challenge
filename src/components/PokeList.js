import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import './PokeList.css';

const PokeList = React.memo(({items}) =>
  <div className='OuterContainer'>
    <div className='InnerContainer'>
      {
        items.map(item => 
          <Card key={item.num}>
            <div>
              <div className='Item'>
                <Link to={{
                  pathname: '/detail',
                  state: {
                    item
                  }
                }}>
                  <b>Name</b> {item.name}
                </Link>
              </div>

              <div className='Item'>
                <b>Num:</b> {item.num}
              </div>

              <div className='Item'>
                <b>Type:</b> {item.type.join(' ')}
              </div>

              <div className='Item'>
                <b>Weaknesses:</b> {item.weaknesses.join(' ')}
              </div>
            </div>
          </Card>
        )
      }
    </div>
  </div>
)

PokeList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default PokeList;