import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, CardMedia, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// @ts-ignore
import Actions from '../store/actions';
import BookmarkCheckbox from './BookmarkCheckbox';

import { RootState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function GalleryItem({ item }: { item: any }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const bookmarks = useSelector((state: RootState) => state.bookmarkedGifs);
  const setBookmarks = (bookmarksObj: {}) => dispatch(Actions.setBookmarkedGifs(bookmarksObj));

  const handleCheckboxChange = (changeEvent: any) => {
    const { name, value } = changeEvent.target;

    const newState = {
      ...bookmarks,
      [name]: value,
    };

    if (bookmarks[name]) {
      delete newState[name];
    }
    // @ts-ignore
    setBookmarks(newState);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <BookmarkCheckbox
              label={item.id}
              isSelected={!!bookmarks[item.id]}
              onCheckboxChange={handleCheckboxChange}
              key={item.id + item.title}
              data={item}
            />
          }
          title={item.title}
          titleTypographyProps={{ variant: 'subtitle1' }}
          subheader={item.username}
        />
        <CardMedia className={classes.cardMedia} image={item.images?.original?.url} title={item.title} />
      </Card>
    </Grid>
  );
}
