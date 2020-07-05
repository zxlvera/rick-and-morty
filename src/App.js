import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import CharactersList from "./components/CharactersList";
import Search from "./components/Search";
import Page from "./components/Page"

const App = () => {
  return (
    <div className="container">
      <Container maxWidth="md">
        <Search />
        <CharactersList />
        <Page />
      </Container>
    </div>
  );
};

export default App;
