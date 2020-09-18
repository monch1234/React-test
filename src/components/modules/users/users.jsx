import React, { Component } from 'react';
import './users.css'
import InfiniteScroll from "react-infinite-scroll-component";
import PageLoader from '../../page-loader/index';
import SearchBlock from './components/search'
import ModalWindow from './components/modal-window';

export default class Users extends Component {

	state = {
		items: [],
		count: 20,
		isLoading: false,
		value: '',
		isToggleOn: true,
		userDetails: null,
		form: {
			first: '',
			last: ''
		}
	}

	componentDidMount() { this.getData() }

	getData = () => {
		this.setState({ isLoading: true }, async (url = `https://randomuser.me/api/?results= ${this.state.count}`, proxy = "https://cors-anywhere.herokuapp.com/") => {
			await fetch(proxy + url)
				.then((response) => response.json())
				.then((response) => {
					this.setState({
						items: response.results,
						loading: true,
						isLoading: false,
						count: this.state.count += 20
					})
				})
		})
	}


	searchUser = (form) => {
		if (form.first || form.last) {
			this.setState({ isLoading: true }, async (url = `https://randomuser.me/api/?gender = ${form.first}`, proxy = "https://cors-anywhere.herokuapp.com/") => {
				await fetch(proxy + url)
					.then((response) => response.json())
					.then((response) => {
						this.setState({
							items: response.results,
							isLoading: false
						})
					})
			})
		} else {
			this.setState({ count: 20 }, () => {
				this.getData()
			})
		}
	}

	displayState = () => {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	openModal = (data) => {
		this.setState({
			userDetails: data,
			isToggleOn: !this.state.isToggleOn
		})
	}

	render() {
		let { items, isToggleOn } = this.state
		return (
			<>
				<SearchBlock form={this.state.form} onChange={this.searchUser} />
				<div className='container'>
					<InfiniteScroll
						dataLength={items.length}
						next={this.getData}
						hasMore={true}
						loader={<h4>{<PageLoader />}</h4>}
					>
						{items.map(item => (

							<div className='user' key={item.login.uuid}>
								<img src={item.picture.large} alt={item.name.first} />
								<div className='userInfo'>
									<h1>Name {item.name.first}</h1>
									<h2>LastName {item.name.last}</h2>
									<h2>Gender {item.gender}</h2>
								</div>

								<div className='buttonMoreInfo'>
									<button onClick={() => this.openModal(item)}>more information </button>
								</div>

							</div>
						))}
					</InfiniteScroll>
					<ModalWindow
						isToggleOn={isToggleOn}
						onclick={this.displayState}
						data={this.state.userDetails}
					/>
				</div>
			</>
		)
	}
}
