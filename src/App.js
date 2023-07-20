import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const  {people, setPeople} = useState([]);
  const  {planets, setPlanets} = useState([]);
  const  {loading, setLoading} = useState([true])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
