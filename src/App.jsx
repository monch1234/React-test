import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Users from './components/modules/users/users';
import UserDetails from './components/modules/UsersDetails';

export default class App extends Component {



	render() {

		return (
			<div className='cont'>
				<BrowserRouter>
					<Route path="/" exact component={Users} />
					<Route path="/:id"
						render={({match}) => {
							const {id} = match.params;
							console.log(id);
							return	<UserDetails itemId = {id} />
						}}
					/>
				</BrowserRouter>
			</div>
		)
	}
}
