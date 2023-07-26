// Importa la librería React, que es necesaria para crear componentes de React y utilizar la sintaxis JSX.
import React from "react";

import "./navbar.css"; // Importar el archivo CSS


// Importa los componentes Menu y Container de la librería Semantic UI React. Estos componentes se utilizarán para construir la barra de navegación.
import { Menu, Container } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu inverted>
      <Container>
        <Link to='/'> <Menu.Item name="Star Wars API" /> </Link> 
        <Link to='/people'> <Menu.Item name="People" /> </Link> 
        <Link to='/planets'> <Menu.Item name="Planets" /> </Link> 
      </Container>
    </Menu>
  );
}
