import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import People from "./components/People";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css"; // Importa tu archivo de estilos CSS personalizados aquí

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log("people", people);
  console.log("planet", planets);

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <div className="container">
          {loading ? (
            <div className="dimmer-active">
              <div className="loader">Loading</div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People data={people} />} />
              <Route path="/planets" element={<Planets data={planets} />} />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
}
