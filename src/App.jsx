import React from 'react';

import './App.css';
import Board from "./Components/Board/Board";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
        <Board/>
        </Provider>
    </div>
  );
};

export default App;
