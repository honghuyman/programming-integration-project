import React, { Component } from 'react';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component
{
	constructor(props)
	{
		super(props);

		this.state = { user_ID: "", amount: "", category_ID: "", date: "", note: "", cateData: [], balance: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount()
	{
		fetch("http://localhost:3005/all-categories")
			.then(response => response.json())
			// .then(data => console.log(data))
			.then((json) =>
			{
				this.setState({
					cateData: json
				})
			});

					fetch("http://localhost:3005/balance/63b039df07258122b58d3b2a")
			.then(response => response.json())
			// .then(data => console.log(data))
			.then((json) =>
			{
				this.setState({
					balance: json
				})
			});
	}

	handleSubmit(e)
	{
		e.preventDefault();

		const { amount, category_ID, date, note } = this.state;
		// const user_ID = window.localStorage.getItem('userID');
		const user_ID = "63b039df07258122b58d3b2a";

		fetch("http://localhost:3005/add-transaction", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user_ID, amount, category_ID, note, date })
		})
			.then(response => response.json())
			.then(data =>
			{
				console.log(data.message);

				if (data.message === "SUCCESS")
				{
					alert("Successfully add transaction");
				}

				// TODO Check again
				// window.location.href = "/transaction";
			})
	}

	openForm()
	{
		document.querySelector('#form-add-trans').style.display = 'block';
		document.querySelector('.overlay').classList.toggle('blur');
		console.log('Open form');
		console.log(document.querySelector('.overlay').classList);
	};

	closeForm()
	{
		document.querySelector('#form-add-trans').style.display = 'none';
		document.querySelector('.overlay').classList.toggle('blur');
		console.log('Close form');
		console.log(document.querySelector('.overlay').classList);
	};

	render()
	{
		const { cateData, balance } = this.state;
		return (

			<>
				<div className="nav-bar">
					<div className="icon icon-my-wallet">
						<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt='wallet icon' />
					</div>

					<div className="my-wallet-text">
						<p className="fw-bold text-start wallet-label">My Wallet</p>
						<p id="wallet-balance">{balance.account_balance} đ</p>
					</div>

					<div className="right-btn">
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
					<form
						onSubmit={this.handleSubmit}
						action="/transaction"
						className="form-container"
					>
						<div className="form-title">Add transaction</div>
						<div className="form-input">
							<div className="form-input-amount">
								<span>Amount</span>
								<span className='text-danger'>*</span>
								<input
									type="number"
									placeholder="0"
									onChange={(e) => this.setState({ amount: e.target.value })}
								/>
							</div>

							<div className="form-input-categories">
								<span>Category</span>
								<span className='text-danger'>*</span>
								<select
									name="category_ID"
									id="form-categories"
									onChange={(e) => this.setState({ category_ID: e.target.value })}
								>
									<option value="none">Choose one</option>
									{
										cateData.map((cate) => (
											<option value={cate._id}>{cate.name}</option>
										))
									}
								</select>
							</div>

							<div className="form-input-date">
								<span>Date</span>
								<span className='text-danger'>*</span>
								<input
									type="date"
									onChange={(e) => this.setState({ date: e.target.value })}
								/>
							</div>

							<div className="form-input-note">
								<span>Note</span>
								<input
									type="text"
									autoComplete="true"
									onChange={(e) => this.setState({ note: e.target.value })}
								/>
							</div>
						</div>
						<div className="form-buttons">
							<button
								type="submit"
								className="btn save">SAVE</button>

							<button
								type="cancel"
								className="btn cancel"
								onClick={this.closeForm}
							>
								CANCEL
							</button>
						</div>
					</form>
				</div>
			</>
		)

	}
}
