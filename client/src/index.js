import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Router>
          <App />
        </Router>
        </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
