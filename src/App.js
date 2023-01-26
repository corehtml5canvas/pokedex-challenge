import React from "react";
import { Route } from 'react-router-dom';
import Pokedex from "./containers/Pokedex";
import Detail from "./components/Detail";

// Assumption: A "generic Details Page" implies navigation to a
// new page. As a result, that navigation will cause the main page
// (in this case Pokedex) to unmount, causing the main page to loose
// its current state. Returning to the main page will re-fetch all
// items without filters.

const App = () => {
  return (
    <>
      <Route path='/' exact component={Pokedex}/>
      <Route path='/detail' component={Detail}/>
    </>
  );
};

export default App