import React, { Component } from 'react';
import './orderlist.scss';


export default class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='orderlist'>
				<ul className='order'>
				{!localStorage.getItem('list') ? <li>There are no items in your cart</li> : '' }
					{this.props.data != null ? this.props.data.map((pizza, i) => {
			 return <li className='cartListItem' key={i} onClick={this.renderPizzasInList}>
						<img src={require('../../images/' + pizza.img)} className='cartListImage' alt={pizza.name}/>
						<div>
							<p>{pizza.name}</p>
							<p>€{pizza.price} x {pizza.amount}</p>
						</div>
					</li>
					}) : ''}
				</ul>
            </div>
        )
    }
}