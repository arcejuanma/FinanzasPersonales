import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState('')

  useEffect(()=>{
    async function getData(){
      const result = await axios.get('http://localhost:8080/ping')
      setData(result.data);
    }
    getData()
  }, [])
  
  return (
    <div className="App">
     <h1>{data}</h1>
    </div>
  );
}

export default App;
