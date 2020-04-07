import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

export function objectIsEmpty(obj: {}) {
  return !obj || Object.keys(obj).length === 0;
}

export function normalizeBookmarks(obj: {}) {
  // @ts-ignore
  return Object.keys(obj).map((s, v) => ({ ...JSON.parse(obj[s]) }));
}

export default function BookmarkPage() {
  const classes = useStyles();
  const [bookmarkList, setBookmarkList] = useState([]);

  const bookmarks = useSelector((state: RootState) => state.bookmarkedGifs);

  useEffect(() => {
    if (!objectIsEmpty(bookmarks)) {
      const newBookmarkList = normalizeBookmarks(bookmarks);
      // @ts-ignore
      setBookmarkList(newBookmarkList);
    }
  }, [bookmarks, setBookmarkList]);

  return (
    <Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {bookmarkList && bookmarkList.length > 0 && bookmarkList.map((item: any) => <GalleryItem item={item} key={item.id} />)}
        </Grid>
      </Container>
    </Fragment>
  );
}
