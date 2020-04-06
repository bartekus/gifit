import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Favorite as FavoriteIcon, Search as SearchIcon, Reply as ReplyIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      margin: theme.spacing(1, 1.5),
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarSpacer: {
      flex: 1,
    },
  })
);

export default function NavBar() {
  const location = useLocation();
  const classes = useStyles();

  const { pathname } = location;

  if (pathname.includes('/bookmark')) {
    return (
      <AppBar position="relative" color="default">
        <Toolbar>
          <Button variant="contained" color="primary" startIcon={<ReplyIcon />} component={Link} to="/">
            Go Back
          </Button>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="relative" color="default">
      <Toolbar>
        <Button size="large" startIcon={<FavoriteIcon />} component={Link} to="/">
          Gifit
        </Button>
        <span className={classes.toolbarSpacer}> </span>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="contained" color="primary" className={classes.link} component={Link} to="/bookmark">
          My Saved Gifs
        </Button>
      </Toolbar>
    </AppBar>
  );
}
