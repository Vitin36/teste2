import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from 'react-intl'

import ptMessages from './i18n/pt'
import esMessages from './i18n/es'

const getPreferredLanguage = () => {
  const predefinedLanguages = ['pt', 'es']
  const userLanguage = navigator.language || navigator.userLanguage
  const language = userLanguage.split('-')[0]
  return predefinedLanguages.includes(language) ? language : predefinedLanguages[0]
}

const locale = getPreferredLanguage()
const messages = { ...ptMessages, ...esMessages }

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
