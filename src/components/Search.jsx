import React, { useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { RickMortyContext } from '../context/'

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: "auto",
    width: "100%",
    // [theme.breakpoints.up("xl")]: {
    //   width: "auto",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "80%",
  },
}));

const Search = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext)
  const { searchChars } = appContext;

  return (
    <Toolbar>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onKeyUp={(e) => {
            e.preventDefault()
            searchChars(e.key, e.target.value)}}
          placeholder="Search Characters"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          fullWidth={true}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Toolbar>
  );
};

export default Search;
