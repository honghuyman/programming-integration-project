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
	clickLastMonthTab(event) 
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

	render()
	{
		return (
			<>
				<SideBar />
				<NavBar />

				<div className="box-transaction mt-0">
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

								<div className="balance-detail" id="category-2">
									<div className="label">
										<img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" alt='icon' />
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

				
			</>
		);
	}
}