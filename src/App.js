import React from 'react'
import './App.css'
import store from "../src/store/index"
import { Provider } from "react-redux"
import MenuBar from './containers/menuBar'

function App() {

  return (
    <Provider store = {store}>
    <div className="App">
     <MenuBar/>
    </div>
    </Provider>
  );
}

export default App;
