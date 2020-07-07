import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from '@material-ui/lab/PaginationItem';
import { RickMortyContext } from "../context/";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Page = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { info, fetchPage } = appContext;

  return (
    <Box mx={10}>
      <Pagination
        className={
          classes.root
       }
        count={info.pages}
        color="secondary"
        size="medium"
        variant="outlined"
        boundaryCount={2}
        onChange={(event, page) => fetchPage(page)}
      ></Pagination>
     </Box>
  );
};

export default Page;
