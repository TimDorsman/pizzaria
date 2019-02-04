import React, { Component } from 'react';
import './product.scss';

export default class Product extends Component {
    constructor() {
		super();

		this.state = {
			itemList: [
            {
                item: {
                id: 1,
                name: 'Stone island logo polo shirt',
                price: '650',
                url: 'https://bit.ly/2B4XAcQ',
                sale: true
                }
            },
            {
                item: {
                id: 1,
                name: 'Stone island cap met logo',
                price: '340',
                url: 'https://bit.ly/2TdVheu',
                sale: true
                }
            },
            {
                item: {
                id: 1,
                name: 'Off White Off Court sneakers',
                price: '340',
                url: 'https://bit.ly/2FSRSi6'
                }
            },
            {
                item: {
                id: 1,
                name: 'Gucci drawstring hem GG web track jacket',
                price: '1480',
                url: 'https://bit.ly/2MAjxVK'
                }
            },
            {
                item: {
                id: 1,
                name: 'Balenciaga All over Logo crewneck jumper',
                price: '520',
                url: 'https://bit.ly/2CMGIrm',
                sale: true
                }
            },
            {
                item: {
                id: 1,
                name: 'Dolce & Gabbana hoodie met pandaprint',
                price: '495',
                url: 'https://bit.ly/2CQA3MU'
                }
            }
            ]
        }
    }
    
    render() {
        return (
            <div>
                <div className='productContainer'>
                {this.state.itemList.map((object, i) => {
             return <div key={i} className='productTile'>
                        <div className='productTop'>
                            <h3 className='productName'>{object.item.name}</h3>
                        </div>
                        <div className='productCenter'>
                            <img src={object.item.url} className='productImage' alt='item'/>
                        </div>
                        <div className='productBottom'>
                            <h4 className='productPrice'>€ {object.item.price},00</h4>
                            { object.item.sale ? <div className='productSale'><span>SALE</span></div> : ''}
                            <button className='productBuy'><a href={'/product/' + object.item.id}>Buy!</a></button>
                        </div>
                    </div>
                })}
                </div>
            </div>
        )
    }
}