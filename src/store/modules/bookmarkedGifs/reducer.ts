import { SET_BOOKMARKED_GIFS } from './actions';

const initialState = {};

export default function bookmarkedGifs(state = initialState, action: { type: any; payload: any; error: any }) {
  switch (action.type) {
    case SET_BOOKMARKED_GIFS:
      return action.payload;

    default:
      return state;
  }
}
