import React, { Component } from 'react';
import UserInfo from './components/userinfo/userinfo';
import OrderList from './components/orderlist/orderlist';
import './sass/Overview.scss';
import Button from './components/button/button';

export default class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userinfo: JSON.parse(localStorage.getItem('user')),
            total: JSON.parse(localStorage.getItem('total'))
        }
    }
    componentDidMount() {
        //transform the localStorage into an array
        let items = `[${localStorage.getItem('list')}]`;

        //transform the array (string) into a real array
        let array = JSON.parse(items);

        this.setState({
            orderlist: array
        });
    }
    render() {
        return (
            <div className='overview'>
                <UserInfo data={this.state.userinfo} />
                <OrderList data={this.state.orderlist} />
                <div className='overviewBottom'>
                    <h4 className='overviewTotal'>Total: €{this.state.total}</h4>
                    <Button class='buttonPrimary' classLink='mg-left' link='/checkout/payment'>To payment</Button>
                </div>
            </div>
        )
    }
}