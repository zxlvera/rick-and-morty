import React, { useContext } from "react";
import { RickMortyContext } from "../context";
import Character from "./Character";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  gridList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
