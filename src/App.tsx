import React, { Fragment } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <DashboardPage />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
