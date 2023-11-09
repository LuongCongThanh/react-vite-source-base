import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../stylesheet/style.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../app/core/service/i18n.service';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </Provider>
);
