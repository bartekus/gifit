import React, { Fragment } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Router from './Router';

function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Router />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
