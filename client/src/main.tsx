import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import { Provider } from 'react-redux';
import App from './App';
import { userAction } from './state/actions';
import store from './state/store';

store.dispatch(userAction.onLoadingSignIn());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
