import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';

const PokeList = React.memo(({items}) => {
  const outerDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const innerDivStyle = {
    marginTop: '10px',
    height: '80vh',
    overflow: 'scroll',
  };

  return (
    <div style={outerDivStyle}>
      <div style={{marginTop: '10px', height: '80vh', overflow: 'scroll'}}>
        {
          items.map(item => 
            <Card key={item.num}>
              <div>
                <div style={{marginBottom: '5px'}}>
                  <Link to={{
                    pathname: '/detail',
                    state: {
                      item
                    }
                  }}>
                    <b>Name</b> {item.name}
                  </Link>
                </div>

                <div style={{marginBottom: '5px'}}>
                  <b>Num:</b> {item.num}
                </div>

                <div style={{marginBottom: '5px'}}>
                  <b>Type:</b> {item.type.join(' ')}
                </div>

                <div style={{marginBottom: '5px'}}>
                  <b>Weaknesses:</b> {item.weaknesses.join(' ')}
                </div>
              </div>
            </Card>
          )
        }
      </div>
    </div>
  )
});

PokeList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default PokeList;