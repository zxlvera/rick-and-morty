import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from '@material-ui/lab/PaginationItem';
import { RickMortyContext } from "../context/";

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    opacity: '80%',
  },
  ul: {
  }
}));

const Page = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { info, fetchPage } = appContext;

  return (
    <Box ml={30} py={2}>
      <Pagination
        classes={{
          root: classes.root,
          ul: classes.ul,
        }}
        count={info.pages}
        color="secondary"
        size="medium"
        variant="outlined"
        boundaryCount={2}
        onChange={(event, page) => fetchPage(page)}
      ></Pagination>
      <PaginationItem className={classes.root} color='primary' />
    </Box>
  );
};

export default Page;
