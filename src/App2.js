import React, { useState, useEffect } from "react";
// Libreria para manejar el enrutamiento y la navegación entre diferentes páginas en una aplicación de una sola página (SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import Planets from "./components/Planets";
import People from "./components/People";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([true]);

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
  });

  console.log("people", people);
  console.log("planet", planets);

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : ( 
            //en v6, la sintaxis para definir una ruta con su elemento (componente) es un poco diferente. En lugar de colocar el componente directamente dentro del <Route> como contenido, debes usar la prop element.
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People data={people} />} />
              <Route path="/planets" element={<Planets data={planets} />} />
            </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}
