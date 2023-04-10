import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/store";
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

store.subscribe(() => {
  const theme = store.getState().themeChanger.theme;
  document.body.classList.toggle('dark', theme === 'dark');
})



/* The store holds the states of our applications*/

/*An action describe what happened in the application*/

/*Reducer - handle the action and decides how to update the state*/