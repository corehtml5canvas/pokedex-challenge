import React, { useCallback, useState } from "react";
import './Pokedex.css';

import Card from "../components/Card";
import PokeList from "../components/PokeList";
import Spinner from "../components/Spinner";

import FilterModal from "../containers/FilterModal";
import Search from "../containers/Search";

import useFetch from "../hooks/useFetch";

import {
  processListItems,
  filterBySearchTerm,
  filterByTypeAndWeakness,
} from '../filter';

const Pokedex = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterBits, setFilterBits] = useState({
    typeBits: 0,
    weaknessBits: 0
  });

  const searchParam =
    filterBits.typeBits === 0 && filterBits.weaknessBits === 0 ?
      searchText : filterBits;

  // Assumption: search and filter are cumulative
  const filterFunction = useCallback(items => {
    let newItems;

    if (searchText) {
      newItems = filterBySearchTerm(items, searchText);
    }

    if (filterBits.typeBits !== 0 || filterBits.weaknessBits !== 0) {
      newItems = filterByTypeAndWeakness(newItems || items, filterBits);
    }

    return newItems || items;
  }, [filterBits, searchText]);

  const extractData = useCallback(response => {
    return response.data.pokemon;
  }, []);
  
  const {
    loading,
    listItems,
    error
  } = useFetch( // Make URL invalid to see error rendered below
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
    searchParam,      // Either bits or search term
    extractData,      // Extract pokemon data
    processListItems, // Process
    filterFunction,   // Filter
  );

  return (
    <div className="Pokedex">
      <FilterModal
        visible={filterModalVisible}
        hideModal={() => setFilterModalVisible(false)}
        setFilterBits={setFilterBits} />

      <header>
        <Search setSearchCallback={setSearchText} />
      </header>

      <section>
        { !error &&
          <button
            className="FilterButton"
            style={{ marginTop: "15px" }}
            onClick={() => setFilterModalVisible(true)} >
            Filter
          </button>
        }
      </section>

      <section>
        {!error && loading ? (
          <Spinner />
        ) : error ? (
          <div className='error'>
            <Card>{error}</Card>
          </div>
        ) : (
          <PokeList items={listItems} />
        )}
      </section>
    </div>
  );
};

export default Pokedex;