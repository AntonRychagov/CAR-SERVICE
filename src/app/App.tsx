import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootStoreProvider } from '../shared/lib/store/RootStore';
import { MainRouter } from './providers/router';

const App: React.FC = () => {
  return (
    <RootStoreProvider>
      <Router>
        <MainRouter />
      </Router>
    </RootStoreProvider>
  );
};

export { App };
