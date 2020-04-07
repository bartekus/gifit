import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// @ts-ignore
import Actions from '../store/actions';
import GalleryItem from '../components/GalleryItem';

import { RootState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 0, 2),
    },
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8),
    },
  })
);

export default function DashboardPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const trendingPending = useSelector((state: RootState) => state.trendingGifs.pending);
  const trendingData = useSelector((state: RootState) => state.trendingGifs.data);
  const trendingError = useSelector((state: RootState) => state.trendingGifs.error);

  const searchGifsData = useSelector((state: RootState) => state.searchGifs.data);
  const searchGifsTerm = useSelector((state: RootState) => state.searchGifs.term);

  useEffect(() => {
    if (!trendingPending && !trendingData && !trendingError) {
      dispatch(Actions.fetchTrendingGifs());
    }
  }, [dispatch, trendingPending, trendingData, trendingError]);

  if (searchGifsData && searchGifsData.length > 0) {
    return (
      <Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Search for {searchGifsTerm} returned
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {searchGifsData.map((item: any) => (
              <GalleryItem item={item} key={item.id} />
            ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Now trending gifs
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {trendingData && trendingData.length > 0 && trendingData.map((item: any) => <GalleryItem item={item} key={item.id} />)}
        </Grid>
      </Container>
    </Fragment>
  );
}
