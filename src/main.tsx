import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';

import './assets/css/reset.css';

const container = document.getElementById('root');

if (!container) {
    throw new Error("Root container not found");
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);
