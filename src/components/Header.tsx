import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Brightness4, Brightness7, Menu } from '@material-ui/icons';
import React from 'react';

interface props {
  isDarkTheme: any;
  isdark: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = (props: props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            edge='end'
            aria-label='menu'
          >
            <Menu />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Abdallah
          </Typography>

          <IconButton
            className={classes.menuButton}
            color='inherit'
            edge='end'
            aria-label='menu'
            onClick={props.isDarkTheme}
          >
            {props.isdark ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
