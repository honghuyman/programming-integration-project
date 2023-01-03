import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
function App() {
	const openForm = () => {
		document.getElementById('form-add-trans').style.display = 'block';
		document.querySelector('.overlay').classList.toggle('blur');
		console.log('Open form');
		console.log(document.querySelector('.overlay').classList);
	};
	const closeForm = () => {
		document.getElementById('form-add-trans').style.display = 'none';
		document.querySelector('.overlay').classList.toggle('blur');
		console.log('Close form');
		console.log(document.querySelector('.overlay').classList);
	};
	const clickLastMonthTab = (event) => {
		document.querySelector('.tab-last-month').classList.toggle('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click last month tab');
	};
	const clickThisMonthTab = (event) => {
		document.querySelector('.tab-this-month').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click this month tab');
	};
	const clickFutureTab = (event) => {
		document.querySelector('.tab-future').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		console.log('Click future tab');
	};
	return (
		<div className="App">
			<div className="page-container">
				{/* <div className="slide-bar">
					<div className="icon icon-menu">
						<img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" />
					</div>
					<div className="icon icon-trans">
						<img src="https://cdn-icons-png.flaticon.com/512/2211/2211093.png" />
						<p>Transaction</p>
					</div>
					<div className="icon icon-report">
						<img src="https://cdn-icons-png.flaticon.com/512/1170/1170667.png" />
						<p>Report</p>
					</div>
					<div className="icon icon-project">
						<img src="https://cdn-icons-png.flaticon.com/512/9186/9186677.png" />
						<p>Project</p>
					</div>
				</div>
				<div className="nav-bar">
					<div className="icon icon-my-wallet">
						<img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" />
					</div>
					<div className="my-wallet-text">
						<p className="wallet-label">My Wallet</p>
						<p id="wallet-balance">xxx,000đ</p>
					</div>
					<div className="right-btn">
						<button className="btn add-trans" onClick={openForm}>
							+ TRANSACTION
						</button>
					</div>
				</div>
				<div className="search-bar">
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
					<div className="search-input note">
						<p>Note</p>
						<input type="text" autoComplete="true" />
					</div>
					<div className="icon icon-search">
						<img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" />
					</div>
				</div> */}
				<div className="box-transaction">
					<div className="tab">
						<div className="tab-last-month hidden" onClick={clickLastMonthTab}>
							LAST MONTH
						</div>
						<div className="tab-this-month" onClick={clickThisMonthTab}>
							THIS MONTH
						</div>
						<div className="tab-future hidden" onClick={clickFutureTab}>
							FUTURE
						</div>
					</div>
					<div className="period-summary">
						<div className="inflow">
							<p className="label">Inflow</p>
							<p className="balance">500,000 ₫</p>
							{/* data */}
						</div>
						<div className="outflow">
							<p className="label">Outflow</p>
							<p className="balance">-300,000 ₫</p>
							{/* data */}
						</div>
						<div className="hr">
							<hr />
						</div>
						<div className="total">
							<p className="balance">200,000 ₫</p>
							{/* data */}
						</div>
					</div>
					<div className="space" />
					<div className="daily-summary">
						<div className="daily" id="day-1">
							<div className="balance-by-day">
								<div className="day-description-1">
									<p className="day">16</p> {/* data */}
								</div>
								<div className="day-description-2">
									<p className="day-of-week">Friday</p> {/* data */}
									<p className="month-year">December 2022</p> {/* data */}
								</div>
								<div className="day-balance">
									<p className="balance">200,000 ₫</p>
									{/* data */}
								</div>
							</div>
							<div className="balance-by-category">
								<div className="balance-detail" id="category-1">
									<div className="label">
										<img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" />
										{/* img src: data */}
										<p>Category_1</p>
										{/* category name: data */}
									</div>
									<div className="balance">
										<p className="negative">-300,000 ₫</p>{' '}
										{/* className = negative/postive: based on amount data */}
									</div>
								</div>
								<div className="balance-detail" id="category-2">
									<div className="label">
										<img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" />
										{/* img src: data */}
										<p>Category_2</p>
										{/* category name: data */}
									</div>
									<div className="balance">
										<p className="positive">500,000 ₫</p>{' '}
										{/* className = negative/postive: based on amount data */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="overlay" />
			<div className="form-popup" id="form-add-trans">
				<form action="/" className="form-container">
					<div className="title-add-trans">Add transaction</div>
					<div className="form-input amount">
						<p>Amount</p>
						<input type="number" placeholder="0" />
					</div>
					<div className="form-input categories">
						<p>Category</p>
						<select name="categories" id="form-categories">
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
					<button className="btn cancel" onClick={closeForm}>
						CANCEL
					</button>
				</form>
			</div>
		</div>
	);
}