import React from 'react'
import './App.css'
import store from "../src/store/index"
import { Provider } from "react-redux"
import WindowDimensionsProvider from './viewPort'
import Home from './containers/Home/Home'
function App() {
  
  return (
    <Provider store = {store}>
      <WindowDimensionsProvider>
        <Home />
      </WindowDimensionsProvider>
    </Provider>
  );
}

export default App;
