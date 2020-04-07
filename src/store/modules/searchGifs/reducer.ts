import { SEARCH_GIFS_PENDING, SEARCH_GIFS_SUCCESS, SEARCH_GIFS_ERROR, RESET_SEARCH_GIFS } from './actions';

const initialState = {
  pending: null,
  term: null,
  data: null,
  pagination: null,
  meta: null,
  error: null,
};

export default function searchGifs(state = initialState, action: { type: any; payload: any; error: any }) {
  switch (action.type) {
    case SEARCH_GIFS_PENDING:
      return {
        ...state,
        pending: true,
        term: action.payload,
        data: null,
        error: null,
      };

    case SEARCH_GIFS_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };

    case SEARCH_GIFS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case RESET_SEARCH_GIFS:
      return {
        pending: null,
        term: null,
        data: null,
        pagination: null,
        meta: null,
        error: null,
      };

    default:
      return state;
  }
}
