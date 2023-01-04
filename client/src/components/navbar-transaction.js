import React, { Component } from 'react';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component
{
	openForm()
	{
		document.getElementById('form-add-trans').style.display = 'block';
		document.querySelector('.overlay').classList.toggle('blur');
		console.log('Open form');
		console.log(document.querySelector('.overlay').classList);
	};

	closeForm()
	{
		document.getElementById('form-add-trans').style.display = 'none';
		document.querySelector('.overlay').classList.toggle('disable');
		console.log('Close form');
		console.log(document.querySelector('.overlay').classList);
	};

	render()
	{
		return (

			<>
				<div className="nav-bar mb-5">
					<div className="icon icon-my-wallet my-4">
						<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt='wallet icon' />
					</div>

					<div className="my-wallet-text mt-4">
						<p className="fw-bold text-start wallet-label">My Wallet</p>
						<p id="wallet-balance">xxx,000đ</p>
					</div>

					<div className='search-bar my-2'>
						<div className="search-input amount">
							<p>Amount</p>
							<input type="number" placeholder="0" />
						</div>

						<div className="search-input categories">
							<p>Category</p>
							<select name="categories" id="search-categories">
								<option value="All">All</option>
								<option value="_1">Category_1</option>
								<option value="_2">Category_2</option>
								<option value="_3">Category_3</option>
							</select>
						</div>

						<div className="search-input date-from">
							<p>From date</p>
							<input type="date" />
						</div>

						<div className="search-input date-to">
							<p>To date</p>
							<input type="date" />
						</div>

						{/* <div className="search-input note">
							<p>Note</p>
							<input type="text" autoComplete="true" />
						</div> */}
					</div>

					<div className="right-btn my-4">
						<button
							onClick={this.openForm}
							className="btn add-trans text-dark">
							+ TRANSACTION
						</button>
					</div>
				</div>

				{/* Form popup */}
				<div className="overlay" />
				<div className="form-popup" id="form-add-trans">
					<form action="/transaction" className="form-container">
						<div className="title-add-trans">Add transaction</div>

						<div className="form-input amount">
							<p>Amount</p>
							<input type="number" placeholder="0" />
						</div>

						<div className="form-input categories">
							<p>Category</p>
							<select name="category" id="form-categories">
								<option value="All">All</option>
								<option value="_1">Category_1</option>
								<option value="_2">Category_2</option>
								<option value="_3">Category_3</option>
							</select>
						</div>

						<div className="form-input date">
							<p>Date</p>
							<input type="date" />
						</div>

						<div className="form-input note">
							<p>Note</p>
							<input type="text" autoComplete="true" />
						</div>

						<button className="btn save">SAVE</button>

						<button className="btn cancel" onClick={this.closeForm}>
							CANCEL
						</button>
					</form>
				</div>
			</>
		)

	}
}
