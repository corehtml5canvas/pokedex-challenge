import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from './Card'
import './Detail.css'

const Detail = ({location: {state: {item}}}) =>
    <div className='DetailContainer'>
      <Card className='DetailCard'>
        <div className='Item'>
          <img alt={item.name} src={item.img} />
        </div>

        <div className='Item'>
          <b>Name</b> {item.name}
        </div>

        <div className='Item'>
          <b>Num:</b> {item.num}
        </div>

        <div className='Item'>
          <b>Height:</b> {item.height}
        </div>

        <div className='Item'>
          <b>Weight:</b> {item.weight}
        </div>

        <div className='Item'>
          <b>Type:</b> {item.type.join(' ')}
        </div>

        <div className='Item'>
          <b>Weaknesses:</b> {item.weaknesses.join(' ')}
        </div>

        { item.prevEolution &&
          <div className='EvolutionContainer'>
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
          <div className='EvolutionContainer'>
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
          <button className='BackButton'>Back</button>
        </Link>
      </Card>
    </div>

Detail.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Detail;