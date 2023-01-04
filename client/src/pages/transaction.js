import React, { Component } from 'react';
import SideBar from '../components/sideBar';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Components
import NavBar from '../components/navbar-transaction';
// import SideBar from '../components/sideBar';

export default class Transaction extends Component
{
	clickLastMonthTab() 
	{
		document.querySelector('.tab-last-month').classList.toggle('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click last month tab');
	};

	clickThisMonthTab()
	{
		document.querySelector('.tab-this-month').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click this month tab');
	};

	clickFutureTab() 
	{
		document.querySelector('.tab-future').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		console.log('Click future tab');
	};

	constructor(props)
	{
		super(props);

		this.state = {
			transactions: [],
			DataIsLoaded: false
		};
	}

	componentDidMount()
	{
		// const userID = window.localStorage.getItem('userID');

		// TODO Change ID into userID, uncomment the above line
		fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
			.then((response) => response.json())
			.then((json) =>
			{
				this.setState({
					transactions: json,
					DataIsLoaded: true
				});
			})
			.then((data) => console.log(data));
	}

	render()
	{
		const { DataIsLoaded, transactions } = this.state;

		if (!DataIsLoaded)
		{
			return (
				<div>
					<h1>You don't have any transaction...</h1>
				</div>
			);
		}

		let date = [];
		let trans = [];
		for (let i = 0; i < transactions.length; i++)
		{
			let temp = transactions[i]['date'].slide(0, 10);
			if (!date.includes(temp))
			{
				date.push('temp');
				
			}
		}

		return (
			<>
				<SideBar />
				<NavBar />

				<div className="box-transaction">
					<div className="tab">
						<div className="tab-last-month hidden" onClick={this.clickLastMonthTab}>
							LAST MONTH
						</div>

						<div className="tab-this-month" onClick={this.clickThisMonthTab}>
							THIS MONTH
						</div>

						<div className="tab-future hidden" onClick={this.clickFutureTab}>
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
						{
							transactions.map((trans) => (
								<div className="daily" id="day">
									<div className="balance-by-day">
										<div className="day-description-1">
											<p className="day">{trans.date[8] + trans.date[9]}</p> {/* data */}
										</div>

										<div className="day-description-2">
											<p className="day-of-week">Friday</p> {/* data */}
											<p className="text-start month-year">December 2022</p> {/* data */}
										</div>

										<div className="day-balance">
											<p className="balance">200,000 ₫</p>
											{/* data */}
										</div>
									</div>

									<div className="balance-by-category">
										<div className="balance-detail category">
											<div className="label">
												<img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" alt='icon' />
												{/* img src: data */}
												<p>Category_1</p>
												{/* category name: data */}
											</div>

											<div className="balance">
												<p className="negative">-300,000 ₫</p>{' '}
												{/* className = negative/positive: based on amount data */}
											</div>
										</div>

										<div className="balance-detail category">
											<div className="label">
												<img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" alt='icon' />
												{/* img src: data */}
												<p>Category_2</p>
												{/* category name: data */}
											</div>

											<div className="balance">
												<p className="positive">500,000 ₫</p>{' '}
												{/* className = negative/positive: based on amount data */}
											</div>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</>
		);
	}
}