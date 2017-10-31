import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import routes from './routes'


let root = document.getElementById('app');
render( routes, root );
