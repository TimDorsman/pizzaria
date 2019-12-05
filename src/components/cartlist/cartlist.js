import React, { Component } from 'react';
import './cartlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleShoppingList } from '../../functions/toggleShoppingList'
import Button from '../../components/button/button'
import Arrow from '../../images/arrow-down.png';
import ReactDOM from 'react-dom';

export default class CartList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pizzas: [],
			status: null,
			amount: this.props.amount,
			test: []
		}
		this.renderPizzasInList = this.renderPizzasInList.bind(this)
		this.localStorageUpdated = this.localStorageUpdated.bind(this)
	}

	componentDidMount(e) {
		if (typeof window !== 'undefined') {
			let items = `[${localStorage.getItem('list')}]`;
			let allPizzas = JSON.parse(items);

			this.setState(() => ({
				pizzas: allPizzas,
				status: localStorage.getItem('list') ? true : false
			}))
			window.addEventListener('storage', this.localStorageUpdated)
		}

		this.scrollBarExists();
	}

	scrollBarExists() {
		const node = ReactDOM.findDOMNode(this);
		const list = node.querySelector('.pizzaList');
		console.log(list.scrollHeight, list.clientHeight);

		if(list.scrollHeight > list.clientHeight) {
			console.log(true);
		}
		else {
			console.log(false);
		}
	}

	renderPizzasInList() {
		let items = `[${localStorage.getItem('list')}]`;
		let allPizzas = JSON.parse(items);
		this.setState(() => ({
			pizzas: [...allPizzas],
			test: []
		}))
	}

	totalAmountPizza() {
		try {
			let items = `[${localStorage.getItem('list')}]`;
			let allPizzas = JSON.parse(items);
			let total = 0;
			allPizzas.forEach(item => {
				total += this.pricePizza(item.price, item.amount);
			})
			localStorage.setItem('total', total);
			return total;
		}
		catch (e) {
			console.warn(e);
		}
	}

	removePizza = (_, index) => {
		let newList = this.state.pizzas;
		const amountForPizza = newList[index].amount;
		const newAmount = amountForPizza - 1;

		if (newAmount <= 0) {
			newList.splice(index, 1);
		}
		else {
			newList[index].amount = `${newAmount}`;
		}

		const stringifiedList = JSON.stringify(newList);
		const result = stringifiedList.substring(1, stringifiedList.length - 1);
		newList.length <= 0 ? localStorage.removeItem('list') : localStorage.setItem('list', result);

		this.setState({
			pizzas: newList
		});
	}

	pricePizza(price, amount) {
		return parseFloat(price) * parseFloat(amount);
	}

	localStorageUpdated() {
		if (!localStorage.getItem('list')) {
			this.updateState(false)
		}
		else if (!this.state.status) {
			this.updateState(true)
		}
	}

	detectPizzas(elem) {
		console.dir(elem.target);

		let showArrow = false;

		console.log(elem.target.scrollTop >= (elem.target.scrollHeight - elem.target.offsetHeight), elem.target.scrollTop, (elem.target.scrollHeight - elem.target.offsetHeight));

		if (elem.target.scrollTop >= (elem.target.scrollHeight - elem.target.offsetHeight - 25)) {
			showArrow = false;
		}
		else
			showArrow = true;

		this.setState({
			showArrow: showArrow
		})
	}

	updateState(value) {
		this.setState({ status: value })
	}

	render() {
		return (
			<>
				<div className='cartList'>
					<div className='cartListHeader'>
						<p className='cartListHeaderTitle'>Cart</p>
						<FontAwesomeIcon icon="times" className='cartListClose fa-2x' onClick={toggleShoppingList} />
					</div>
					<ul className='pizzaList' onScroll={(e) => this.detectPizzas(e)}>
						{!localStorage.getItem('list') ? <li className='cartListItem'>There are no items in your cart</li> : ''}
						{this.state.pizzas[0] != null ? this.state.pizzas.map((pizza, i) => {
							return <li className='cartListItem' key={i} onClick={this.renderPizzasInList}>
								<img src={require('../../images/' + pizza.img)} className='cartListImage' alt={pizza.name} />
								<div>
									<p>{pizza.name}</p>
									<p>€{pizza.price} x {pizza.amount}</p>
									<p className='pizzaTotal'>€{this.pricePizza(pizza.price, pizza.amount).toFixed(2)}</p>
									<Button customClass='buttonPrimary' onClick={(e) => { this.removePizza(e, i) }}>Remove pizza</Button>
								</div>
							</li>
						}) : ''}
						<img src={Arrow} alt='arrow down' className={`arrowDown${!this.state.showArrow ? ' arrowDownHide': ''}`} />
					</ul>
					{localStorage.getItem('list') ? <div className='checkout'><span className='cartListTotal'>Total amount: €{this.totalAmountPizza().toFixed(2)}</span>

						<Button linkClass='checkoutLink' customClass='buttonPrimary' link={localStorage.getItem('user') ? '/checkout/overview' : '/checkout'} onClick={this.saveTotalAmount}>Checkout</Button></div> : ''}
				</div>
			</>
		)
	}
}