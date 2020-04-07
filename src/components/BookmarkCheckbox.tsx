import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { FavoriteBorder as FavoriteIconOff, Favorite as FavoriteIconOn } from '@material-ui/icons';

// @ts-ignore
export default function BookmarkCheckbox({ label, isSelected, onCheckboxChange, data }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="default"
          icon={<FavoriteIconOff />}
          checkedIcon={<FavoriteIconOn />}
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
          value={JSON.stringify(data)}
        />
      }
      label=""
    />
  );
}
