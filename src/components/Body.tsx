import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: '50vh',
      borderRadius: '0',
    },
  })
);

const Body = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.paper}>Hello</Paper>
    </Fragment>
  );
};

export default Body;
