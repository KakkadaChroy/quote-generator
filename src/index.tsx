import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// store provider
import Store from "./app/redux/store";
import {Provider} from "react-redux";
import {AppRoute} from "./app/routing/AppRoute";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <AppRoute/>
        </Provider>
    </React.StrictMode>
);

