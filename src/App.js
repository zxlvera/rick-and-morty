import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container";
import CharactersList from "./components/CharactersList";
import Search from "./components/Search";
import Page from "./components/Page"

const App = () => {
  return (
    <div className="container">
      <Container maxWidth="md">
        <Typography
          align='center'
          variant='h1'
          gutterBottom={true}
        >
          Rick and Morty
          </Typography>
        <Search />
        <Page />
        <CharactersList />
      </Container>
    </div>
  );
};

export default App;
