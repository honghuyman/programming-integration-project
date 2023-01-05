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
			body: JSON.stringify({ user_ID, 
				amount: (this.state.cateData.find(cate => cate._id === category_ID).type === 'income') ? Number(amount) : -Number(amount),
				category_ID, note, date })
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
				window.location.href = "/transaction";
			})
	}

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
		window.location.href = "/transaction";
	};

	render()
	{
		const { cateData, balance } = this.state;
		const bl = balance.account_balance?.toLocaleString('en-US');

		return (

			<>
				<div className="nav-bar mb-5">
					<div className="icon icon-my-wallet">
						<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt='wallet icon' />
					</div>

					<div className="my-wallet-text">
						<p className="fw-bold text-start wallet-label">My Wallet</p>
						<p id="wallet-balance" className={balance.account_balance > 0 ? "text-success" : "text-danger"}>{bl} đ</p>
					</div>

					{/* Search bar */}
					{/* <div className='search-bar my-2'>
						<div className="search-input amount">
							<p>Amount</p>
							<input type="number" placeholder="0" />
						</div>

						<div className="search-input categories">
							<p>Category</p>
							<select name="categories" id="search-categories">
								<option value="none">none</option>
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
					{/* </div> */}

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
						<div className="title-add-trans">Add transaction</div>

						<div className="form-input amount">
							<span>Amount </span>
							<span className='text-danger'>*</span>
							<input
								type="number"
								placeholder="0"
								onChange={(e) => this.setState({ amount: e.target.value })}
							/>
						</div>

						<div className="form-input categories">
							<span>Category </span>
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

						<div className="form-input">
							<span>Date </span>
							<span className='text-danger'>*</span>
							<input
								type="date"
								onChange={(e) => this.setState({ date: e.target.value })}
							/>
						</div>

						<div className="form-input note">
							<p>Note</p>
							<input
								type="text"
								autoComplete="true"
								onChange={(e) => this.setState({ note: e.target.value })}
							/>
						</div>

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
					</form>
				</div>
			</>
		)

	}
}
