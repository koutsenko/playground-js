import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import rootReducer from './reducers/app';
import rootMiddleware from './middlewares/app';

const store = createStore(rootReducer, rootMiddleware);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.onload = function() {
  root.render((
    <Provider store={store}>
      <App />
    </Provider>
  ));
}
