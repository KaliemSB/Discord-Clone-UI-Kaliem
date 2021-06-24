import React, { Fragment } from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout />
    </Fragment>
  );
}