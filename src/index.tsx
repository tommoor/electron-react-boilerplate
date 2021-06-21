import React from 'react';
import SDK from '@elasticprojects/abstract-cli';
import { render } from 'react-dom';
import App from './App';

console.log(SDK);

render(<App />, document.getElementById('root'));
