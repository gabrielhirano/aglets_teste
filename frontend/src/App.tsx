import React from "react";

import NavBar from "./components/NavBar";
import Container from "./components/Container";
import List from "./components/List";

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <Container>
          <h1>Controle de pedidos</h1>
          <List></List>
        </Container>
      </div>
  );
}

export default App;
