import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Switch,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

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

const Header = (props: {
  isDarkTheme:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}) => {
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
          <Button color='inherit' onClick={props.isDarkTheme}>
            <Switch
              name='checkedB'
              color='default'
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
