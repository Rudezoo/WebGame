import React from 'react';
import ReactDOM from 'react-dom';

import {hot} from 'react-hot-loader/root'
import Web from './web_script/Web'
const Hot=hot(Web);

ReactDOM.render(<div><Hot/></div>,document.querySelector('#root'));