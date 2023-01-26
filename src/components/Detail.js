import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

const Detail = ({location: {state: {item}}}) => {
  const outerDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={outerDivStyle}>
      <Card style={{width: '30vh'}}>
        <div style={{marginBottom: '5px'}}>
          <img alt={item.name} src={item.img} />
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Name</b> {item.name}
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Num:</b> {item.num}
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Height:</b> {item.height}
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Weight:</b> {item.weight}
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Type:</b> {item.type.join(' ')}
        </div>

        <div style={{marginBottom: '5px'}}>
          <b>Weaknesses:</b> {item.weaknesses.join(' ')}
        </div>

        { item.prevEolution &&
          <div style={{marginBottom: '5px'}}>
            <b>Prev Evolution:</b>
            { item.prevEvolution.map(item =>
                <Link to={{
                    pathname: '/detail',
                    state: {item}
                  }}
                >
                  <div> {item.name} </div>
                </Link>
              ) 
            }
          </div>
        }

        { item.nextEvolution &&
          <div style={{marginBottom: '5px'}}>
            <b>Next Evolution:</b>
            { item.nextEvolution.map(item =>
                <Link to={{
                    pathname: '/detail',
                    state: {item}
                  }}
                >
                  <div> {item.name} </div>
                </Link>
              ) 
            }
          </div>
        }

        <Link to='/'>
          <button style={{margin: '20px'}}>Back</button>
        </Link>
      </Card>
    </div>
  )
}

Detail.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Detail;