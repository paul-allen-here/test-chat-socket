import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import middleware from './socket';
import './index.css';

import App from './components/App';

const store = createStore(reducer, applyMiddleware(middleware));

ReactDOM.render(<Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));