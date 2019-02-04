import React, { Component } from 'react';
import New from './components/new/new';
import { comingUp } from './mockData';
import ComingUp from './components/comingup/comingup';

export default class Home extends Component {  

    render() {
        return (
            <>
            <New />
            <ComingUp data={comingUp} />
            </>
        )
    }
}