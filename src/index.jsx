import React from 'react';
import ReactDOM from 'react-dom'
import App from 'containers';
import { IntlProvider } from 'react-intl'

import ptMessages from './i18n/pt'
import esMessages from './i18n/es'

// const getPreferredLanguage = () => {
//     const predefinedLanguages = ['pt', 'es']
//     const userLanguage = navigator.language || navigator.userLanguage
//     const language = userLanguage.split('-')[0]
//     return predefinedLanguages.includes(language) ? language : predefinedLanguages[0]
// }

const locale = 'es'
const messages = { ...ptMessages, ...esMessages }

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
    </IntlProvider>,
    document.getElementById('root'),
);