import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../hooks/useDebounce';
import './Search.css';

const Search = React.memo(({setSearchCallback}) => {
  const [searchText, setSearchText] = useState(''); // For controlled input
  const debouncedText = useDebounce(searchText, 800); // 800ms debounce delay
  const inputRef = useRef(null); // For giving focus to textfield

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (debouncedText !== null) {
      setSearchCallback(debouncedText);
    }
  }, [debouncedText, setSearchCallback]);

  return (
    <div className='Search'>
      <label htmlFor='search' style={{marginBottom: '10px'}}>
        Search
      </label>

      <input
        id='search'
        ref={inputRef}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        style={{width: '20em'}}/>
    </div>
  );
});

Search.propTypes = {
  setSearchCallback: PropTypes.func.isRequired,
  resetBits: PropTypes.func.isRequired,
}

export default Search;