import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import App from './App';
import configureStore from './store/configure';
import ApiService from './services/api';
import { loadState, saveState } from './services/localStorage';

import * as serviceWorker from './serviceWorker';

const persistedState = loadState();

const store = configureStore({ initialState: persistedState, services: { ApiService } });

store.subscribe(
  throttle(() => {
    // @ts-ignore
    saveState({ bookmarkedGifs: store.getState().bookmarkedGifs });
  }, 1000)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
