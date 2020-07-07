import React, { useContext } from "react";
import { RickMortyContext } from "../context";
import Character from "./Character";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    overflow: "hidden",
  },
}));

const CharactersList = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { data } = appContext;

  return (
    <Box mx={5}>
    <GridList className={classes.root} >
      {data.map((char) => (
        <Character
          key={char.id}
          image={char.image}
          name={char.name}
        ></Character>
      ))}
    </GridList>
    </Box>
  );
};

export default CharactersList;
