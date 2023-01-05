import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component {
	openFormProj = (event) => {
		document.querySelector('#form-add-proj').style.display = 'block';
		document.querySelector('.overlay').classList.toggle('blur');
	};
	render() {
		return (
			<div className="nav-bar">
				{/* TODO Change */}
				<div className={window.location.pathname === '/project' ? 'd-none my-wallet' : 'my-wallet'}>
					<div className="icon icon-my-wallet">
						<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt="wallet icon" />
					</div>

					<div className="my-wallet-text">
						<p className="wallet-label">Project's Wallet</p>
						<p id="wallet-balance">xxx,000 ₫</p>
					</div>
				</div>

				<div className={window.location.pathname === '/project/new-project' ? 'd-none' : ''}>
					<div className="right-btn justify-content-center">
						<button className="btn project" onClick={this.openFormProj}>
							+ PROJECT
						</button>
					</div>
				</div>
			</div>
		);
	}
}

function CustomLink({ to, children, ...props }) {
	return (
		<Link to={to} {...props}>
			{children}
		</Link>
	);
}
