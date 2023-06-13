import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { reducer,initialState } from "./reducer";
import reportWebVitals from './reportWebVitals';
import {DataLayer} from './DataLayer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
