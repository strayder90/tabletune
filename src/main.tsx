import React, {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@redux/store';

import {App} from './App';
import '@assets/css/reset.css';
import '@sass/style.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container not found');
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);
