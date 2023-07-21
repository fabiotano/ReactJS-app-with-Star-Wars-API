import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
// Libreria para manejar el enrutamiento y la navegación entre diferentes páginas en una aplicación de una sola página (SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/Home";
import Planets from "./components/Planets";
import People from "./components/People";


export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  });

  console.log("people", people);
  console.log("planet", planets);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}


