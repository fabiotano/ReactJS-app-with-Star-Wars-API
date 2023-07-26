import React from "react";
import "./people.css";

export default function People({ data }) {
  return (
    <div className="body-bg-image-people">
      <h1>People</h1>
      <div className="grid-people">
        {data.map((people, i) => {
          return (
            <div className="card-people" key={i}>
              <h2>{people.name}</h2>
              <p>
                <strong>Climate:</strong> {people.height}
              </p>
              <p>
                <strong>Diameter:</strong> {people.mass}
              </p>
              <p>
                <strong>Population:</strong> {people.hair_color}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
