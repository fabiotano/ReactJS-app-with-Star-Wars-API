import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  const [ people, setPeople ] = useState([]);
  const [ planets, setPlanets ] = useState([]);
  const [ loading, setLoading ] = useState([true])

  useEffect(() => {

    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setPeople(data.results)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json')
      let data = await res.json()
      setPlanets(data.results)
    }

    fetchPeople();
    fetchPlanets();
  })

  console.log('people', people)
  console.log('planet', planets)

  return (
    <div className="App">
      <Navbar />
      Hola
    </div>
  );
}

export default App;

