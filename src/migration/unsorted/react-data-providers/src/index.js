import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Urls from 'constants/Urls';
import DocPage from 'pages/Doc';
import DocListPage from 'pages/DocList';
import DocSearchPage from 'pages/DocSearch';
import MainPage from 'pages/Main';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={Urls.URL_MAIN}>
          <MainPage />
        </Route>
        <Route exact path={Urls.URL_DOCLIST}>
          <DocListPage />
        </Route>
        <Route exact path={Urls.URL_DOCSEARCH}>
          <DocSearchPage />
        </Route>
        <Route
          exact
          path={Urls.URL_DOC(':pk')}
          render={({ match }) => {
            const pk = parseInt(match.params.pk, 10);

            return <DocPage {...{ pk }} />;
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
