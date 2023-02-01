import { useState, useEffect } from "react";
import axios from "axios";

// General purpose useFetch hook that fetches, processes, and filters
// items from a URL

const useFetch = (url, extractData, process, filter) => {
  const [loading, setLoading] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);

      try {
        setListItems(process(extractData(await axios(url))));
        setLoading(false);
      } catch (ex) {
        setError(ex.message);
      }
    };

    if (listItems.length === 0) {
      fetchItems();
    }
  }, [url, extractData, process, listItems.length]);

  useEffect(() => {
    if (listItems.length > 0) {
      setFilteredItems(filter(listItems));
    }
    else {
      setFilteredItems(listItems);
    }
  }, [filter, listItems]);

  return {
    loading,
    error,
    listItems: filter ? filteredItems : listItems,
  };
};

export default useFetch;