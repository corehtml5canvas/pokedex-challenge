import {useState, useEffect} from 'react';

// General purpose debounce hook

const useDebounce = (text, debounceTimeout) => {
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setDebouncedText(text);
    }, debounceTimeout);

    return () => clearTimeout(timeout);
  })

  return debouncedText;
}

export default useDebounce;