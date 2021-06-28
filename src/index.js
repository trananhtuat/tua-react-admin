import React from 'react';
import ReactDOM from 'react-dom';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './index.css';

import Layout from './components/layout/Layout'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
