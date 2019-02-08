import React, { Component } from 'react';

import '../../general/main.scss';
import './userinfo.scss';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    
    render() {
        return (
            <div className='userinfo'>
                {Object.entries(this.state.data).map((entry, i) => {
                    let key = entry[0];
                    let value = entry[1];
            return  <div key={i}>
                        <p>{key}: {value}</p>
                    </div>
                })}

            </div>
        )
    }
}