import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import routes from './routes';
import 'tinper-bee/assets/tinper-bee.css';
// import 'tinper-bee/assets/theme/tinper-bee-blue.css';
// import 'tinper-bee/assets/theme/tinper-bee-indigo.css';
// import 'tinper-bee/assets/theme/tinper-bee-lightBlue.css';

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('babel-polyfill');

let root = document.getElementById('app');
render(routes, root);
