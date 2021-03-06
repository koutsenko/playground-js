import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Urls from 'constants/Urls';
import DocPage from 'pages/Doc';
import DocListPage from 'pages/DocList';
import DocSearchPage from 'pages/DocSearch';
import MainPage from 'pages/Main';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
