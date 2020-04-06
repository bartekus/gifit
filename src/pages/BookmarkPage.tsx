import React, { Fragment } from 'react';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, Container, Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
  })
);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BookmarkPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={
                    <IconButton aria-label="bookmark">
                      <FavoriteIcon />
                    </IconButton>
                  }
                  title="Title"
                  subheader="Username"
                />
                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
