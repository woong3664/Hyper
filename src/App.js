// @flow
import React, { Component } from 'react';
import Routes from './routes/Routes';
import axios from "axios";

import { configureFakeBackend } from './helpers';

import './assets/scss/Saas.scss';

configureFakeBackend();



class App extends Component {
    render() {
        return <Routes></Routes>;
    }
}

export default App; 