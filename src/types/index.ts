export interface RootState {
  bookmarkedGifs: never[];
  searchGifs: {
    pending: boolean | undefined;
    term: string | undefined;
    data: [] | undefined;
    pagination: {} | undefined;
    meta: {} | undefined;
    error: any | undefined;
  };
  trendingGifs: {
    pending: boolean | undefined;
    data: [] | undefined;
    pagination: {} | undefined;
    meta: {} | undefined;
    error: any | undefined;
  };
}
