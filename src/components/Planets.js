import React from "react";
import "./planets.css";

export default function Planets({ data }) {
  return (
    <div className="body-bg-image-planets">
      <h1>Planets</h1>
      <div className="grid-planet">
        {data.map((planet, i) => {
          return (
            <div className="card-planet" key={i}>
              <h2>{planet.name}</h2>
              <p>
                <strong>Climate:</strong> {planet.climate}
              </p>
              <p>
                <strong>Diameter:</strong> {planet.diameter}
              </p>
              <p>
                <strong>Population:</strong> {planet.population}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
