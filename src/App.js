import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import People from "./components/People";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css"; // Importa tu archivo de estilos CSS personalizados aquí

// llamada a la API

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let allPeople = [];
      let page = "https://swapi.dev/api/people/?format=json";

      while (page) {
        let res = await fetch(page);
        let data = await res.json();
        allPeople = [...allPeople, ...data.results];
        page = data.next;
      }

      setPeople(allPeople);
    }

    async function fetchPlanets() {
      let allPlanets = [];
      let page = "https://swapi.dev/api/planets/?format=json";

      while (page) {
        let res = await fetch(page);
        let data = await res.json();
        allPlanets = [...allPlanets, ...data.results];
        page = data.next;
      }

      setPlanets(allPlanets);
    }

    // Usamos Promise.all para esperar a que ambas llamadas a la API finalicen
    Promise.all([fetchPeople(), fetchPlanets()]).then(() => {
      setLoading(false);
    });
  }, []);

  //

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
