import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import { Web3Context, getUserInfo } from './contexts/Web3'
import * as serviceWorker from './serviceWorker';

render({})
getUserInfo().then(render)

async function render(contextValue) {
  ReactDOM.render(
    <Web3Context.Provider value={contextValue}>
      <App />
    </Web3Context.Provider>,
    document.getElementById('root')
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
