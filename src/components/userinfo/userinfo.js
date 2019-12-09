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
            <div className='userInfo'>
                {Object.entries(this.state.data).map((entry) => {
                    const key = entry[0];
                    const value = entry[1];
            return  <div key={key}>
                        <p>{key}: <span className='userInfoValue'>{value}</span></p>
                    </div>
                })}

            </div>
        )
    }
}