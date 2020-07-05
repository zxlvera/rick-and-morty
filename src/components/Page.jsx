import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { RickMortyContext } from "../context/";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
    page: {
     color:"red",
    }
}));

const Page = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { info, fetchPage } = appContext;

  return (
    <div>
      <Pagination
        classes={classes.page}
        count={info.pages}
        color="primary"
        size="large"
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  );
};

export default Page;
