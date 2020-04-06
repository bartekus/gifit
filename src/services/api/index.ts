import { get } from './helpers';

const directory = {
  search: () => ({ path: `/gif/search`, method: 'get' }),
  random: () => ({ path: `/gif/random`, method: 'get' }),
  trending: () => ({ path: `/gif/trending`, method: 'get' }),
  translate: () => ({ path: `/gif/translate`, method: 'get' }),
};

export default {
  get,
  directory,
};
