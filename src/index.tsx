import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './screens/app/App';
import { configureStore } from "./state/store";
import { Provider } from 'react-redux';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
