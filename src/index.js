import React from "react";
import ReactDom from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import rootReducer from './store/modules'
import { Provider } from "react-redux";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();