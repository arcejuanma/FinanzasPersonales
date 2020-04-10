import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import MenuBar from './containers/menuBar'

function App() {

  return (
    <div className="App">
     <MenuBar/>
    </div>
  );
}

export default App;
