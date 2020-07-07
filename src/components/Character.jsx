import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridListTile, GridListTileBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '10rem',
    width: '10rem',
    objectFit: 'cover',
    margin: "1rem",
    transition: 'transform 0.5s',
    '&:hover': {
      boxShadow: '0 10px 10px rgba(88, 176, 192, 0.8)',
      transform: 'scale(1.2)',
    },
    },
  }
));

const Character = ({ name, image }) => {
  const classes = useStyles();

  return (
      <GridListTile key={image} className={classes.root}>
        <img src={image} alt={name} title={name} ></img>
        <GridListTileBar title={name}></GridListTileBar>
      </GridListTile>
  );
};

export default Character;
