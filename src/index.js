import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/index.scss';
import AppRouter from "./routers/AppRouter";

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root'));
