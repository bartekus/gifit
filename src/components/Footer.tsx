import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Copyright from './Copyright';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Gifit
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        A gif for every occasion
      </Typography>
      <Copyright />
    </footer>
  );
}
