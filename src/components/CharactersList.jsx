import React, { useContext } from "react";
import { RickMortyContext } from "../context";
import Character from "./Character";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
  },
}));

const CharactersList = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { data } = appContext;

  return (
    <GridList className={classes.gridList} >
      {data.map((char) => (
        <Character
          key={char.id}
          image={char.image}
          name={char.name}
        ></Character>
      ))}
    </GridList>
  );
};

export default CharactersList;
