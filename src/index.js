import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import AuthStore from './components/stores/AuthStore';

const stores = {
    AuthStore,
};

window._____APP_STATE_____ = stores;

ReactDOM.render(
    <Provider {...stores}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
