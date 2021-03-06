/**
 * Created by huang on 13/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const rootElement = document.getElementById('app');
render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootElement
        );
    });
}