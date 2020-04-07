import React, { Fragment, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// @ts-ignore
import Actions from '../store/actions';
import GalleryItem from '../components/GalleryItem';

import { RootState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
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

  useEffect(() => {
    if (!trendingPending && !trendingData && !trendingError) {
      dispatch(Actions.fetchTrendingGifs());
    }
  }, [dispatch, trendingPending, trendingData, trendingError]);

  return (
    <Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {trendingData && trendingData.length > 0 && trendingData.map((item: any) => <GalleryItem item={item} key={item.id} />)}
        </Grid>
      </Container>
    </Fragment>
  );
}
