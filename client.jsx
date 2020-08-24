import React from 'react';
import ReactDOM from 'react-dom';

import {hot} from 'react-hot-loader/root'
import Games from './script/Games'
const Hot=hot(Games);

ReactDOM.render(<div><Hot/></div>,document.querySelector('#root'));