import { GET_TRENDING_GIFS_PENDING, GET_TRENDING_GIFS_SUCCESS, GET_TRENDING_GIFS_ERROR } from './actions';

const initialState = {
  pending: null,
  data: null,
  pagination: null,
  meta: null,
  error: null,
};

export default function trendingGifs(state = initialState, action: { type: any; payload: any; error: any }) {
  switch (action.type) {
    case GET_TRENDING_GIFS_PENDING:
      return {
        ...state,
        pending: true,
        data: null,
        error: null,
      };

    case GET_TRENDING_GIFS_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };

    case GET_TRENDING_GIFS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
}
