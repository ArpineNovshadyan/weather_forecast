import React, { Component } from 'react';
import { BrowserRouter , Route, } from 'react-router-dom';

import Container from './../containers/index';


export default class Routerr extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Container} />                 
                </div>
            </BrowserRouter>
        );
    }
}
