import { fade, Input } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Search as SearchIcon } from '@material-ui/icons';
import React, { useState, useEffect, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// @ts-ignore
import Actions from '../store/actions';
import { useDebounce } from '../hooks';
import { RootState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      '& $inputInput': {
        transition: theme.transitions.create('width'),
        width: 120,
        '&:focus': {
          width: 170,
        },
      },
    },
    search: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 9),
    },
  })
);

// @ts-ignore
export default function SearchBox() {
  const classes = useStyles();
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const searchGifsPending = useSelector((state: RootState) => state.searchGifs.pending);
  const searchGifsTerm = useSelector((state: RootState) => state.searchGifs.term);
  const searchGifsError = useSelector((state: RootState) => state.searchGifs.error);

  const [searchTerm, setSearchTerm] = useState('');

  // Debounce search term so that it only gives us latest value if searchTerm has not been updated within last 500ms.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      if (!searchGifsPending && !searchGifsError && searchGifsTerm !== debouncedSearchTerm) {
        dispatch(Actions.searchGifs(debouncedSearchTerm));
      }
    } else {
      if (!!searchGifsTerm) {
        dispatch(Actions.resetSearchGifs());
      }
    }
  }, [dispatch, debouncedSearchTerm, searchGifsPending, searchGifsError, searchGifsTerm]);

  return (
    <div className={classes.root} style={{ display: 'flex' }}>
      <div className={classes.search}>
        <SearchIcon />
      </div>
      <Input
        placeholder="search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        id="gifit-input"
        inputRef={inputRef}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
}
