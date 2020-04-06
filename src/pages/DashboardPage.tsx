import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, Container, Grid, IconButton } from '@material-ui/core';

// @ts-ignore
import Actions from '../store/actions';

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

interface RootState {
  trendingGifs: {
    pending: boolean | undefined;
    data: [] | undefined;
    pagination: {} | undefined;
    meta: {} | undefined;
    error: any | undefined;
  };
}

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
          {trendingData &&
            trendingData.length > 0 &&
            trendingData.map((gif: any) => (
              <Grid item key={gif.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader
                    action={
                      <IconButton aria-label="bookmark">
                        <FavoriteIcon />
                      </IconButton>
                    }
                    title={gif.title}
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    subheader={gif.username}
                  />
                  <CardMedia className={classes.cardMedia} image={gif.images?.original?.url} title={gif.title} />
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
