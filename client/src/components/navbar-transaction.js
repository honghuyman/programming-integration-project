import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component
{
	render()
	{
		return (
			<div className="nav-bar">
				<div className="icon icon-my-wallet">
					<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt='wallet icon'/>
				</div>

				<div className="my-wallet-text">
					<p className="wallet-label">My Wallet</p>
					<p id="wallet-balance">xxx,000đ</p>
				</div>

				<div className="right-btn">
					<button className="btn add-trans text-dark">+ TRANSACTION</button>
				</div>
			</div>
		)

	}
}
