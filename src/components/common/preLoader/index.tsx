import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  preLoader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PreLoader = () => {
  const classes = useStyles();
  return (
    // @ts-ignore
    <Box className={classes.preLoader} sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default PreLoader;
