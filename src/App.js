import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container";
import CharactersList from "./components/CharactersList";
import Search from "./components/Search";
import Page from "./components/Page"

const App = () => {
  return (
      <Container maxWidth="lg">
        <Typography
          align='center'
          variant='h3'
          gutterBottom={true}
        >
          Rick and Morty
          </Typography>
        <Search />
        <Page />
        <CharactersList />
      </Container>
  );
};

export default App;
