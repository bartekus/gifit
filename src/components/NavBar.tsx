import React from 'react';
import { Favorite as FavoriteIcon, Search as SearchIcon } from '@material-ui/icons';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
  })
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="default">
      <Toolbar>
        <FavoriteIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Gifit
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button color="primary" variant="outlined" size="small" className={classes.link}>
          My Saved Gifs
        </Button>
      </Toolbar>
    </AppBar>
  );
}
