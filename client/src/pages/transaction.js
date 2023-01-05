import React, { Component } from 'react';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Components
import NavBar from '../components/navbar-transaction';
import SideBar from '../components/sideBar';

export default class Transaction extends Component
{
	clickLastMonthTab() 
	{
		document.querySelector('.tab-last-month').classList.toggle('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click last month tab');
		
		fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((json) =>
			{
				let date = new Date();
				date.setMonth(date.getMonth() - 1)
				let transData = json.filter(tran => tran.date.slice(0, 7) === date.toISOString().slice(0, 7))
				this.setState({
					transData: transData,
					DataIsLoaded: true
				});
			})
	};

	clickThisMonthTab()
	{
		document.querySelector('.tab-this-month').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-future').classList.add('hidden');
		console.log('Click this month tab');

		fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((json) =>
			{
				let date = new Date();
				let transData = json.filter(tran => tran.date.slice(0, 7) === date.toISOString().slice(0, 7))
				this.setState({
					transData: transData,
					DataIsLoaded: true
				});
			})
	};

	clickFutureTab() 
	{
		document.querySelector('.tab-future').classList.toggle('hidden');
		document.querySelector('.tab-last-month').classList.add('hidden');
		document.querySelector('.tab-this-month').classList.add('hidden');
		console.log('Click future tab');

		fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((json) =>
			{
				let date = new Date();
				date.setMonth(date.getMonth() + 1)
				let transData = json.filter(tran => tran.date.slice(0, 7) === date.toISOString().slice(0, 7))
				this.setState({
					transData: transData,
					DataIsLoaded: true
				});
			})
	};

	constructor(props)
	{
		super(props);

		this.state = {
			transData: []
		};

		this.clickFutureTab = this.clickFutureTab.bind(this);
		this.clickThisMonthTab = this.clickThisMonthTab.bind(this);
		this.clickLastMonthTab = this.clickLastMonthTab.bind(this);
	}

	componentDidMount()
	{
		// const userID = window.localStorage.getItem('userID');

		// TODO Change ID into userID, uncomment the above line
		fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((json) =>
			{
				let transData = json.filter(tran => tran.date.slice(0, 7) === new Date().toISOString().slice(0, 7))
				this.setState({
					transData: transData
				});
			})
	}

	render()
	{
		const { transData } = this.state;

		// * PREPARE DATA
		const weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		let sumIn = 0, sumOut = 0;
		for (let i = 0; i < transData.length; i++)
		{
			// * Amount
			let sumOfDate = 0;
			for (let j = 0; j < transData[i].transactions.length; j++)
			{
				let amt = transData[i].transactions[j].amount;

				sumOfDate += amt;

				if (amt < 0)
					sumOut += amt;
				else
					sumIn += amt;
			}
			transData[i].sum = sumOfDate;

			// * Day, Month & Year, Day of Week
			let d = new Date(transData[i].date);
			transData[i].weekday = weekdayArr[d.getDay()];
			transData[i].day = d.getDate();
			transData[i].month_year = monthArr[d.getMonth()] + " " + d.getFullYear().toString();


			console.log(transData[i]);
		}

		return (
			<>
				<SideBar />
				<NavBar />

				<div className="box-transaction">
					<div className="tab">
						<div to='last-month' className="tab-last-month hidden" onClick={this.clickLastMonthTab}>
							LAST MONTH
						</div>

						<div to='this-month' className="tab-this-month" onClick={this.clickThisMonthTab}>
							THIS MONTH
						</div>

						<div to='next-month' className="tab-future hidden" onClick={this.clickFutureTab}>
							NEXT MONTH
						</div>
					</div>
				</div>

				<div className='box-transaction'>
					<div className="period-summary">
						<div className="inflow">
							<p className="label">Inflow</p>
							<p className="balance">{sumIn.toLocaleString('en-US')} đ</p>
						</div>

						<div className="outflow">
							<p className="label">Outflow</p>
							<p className="balance">{(sumOut !== 0 ? sumOut * -1 : 0).toLocaleString('en-US')} ₫</p>
						</div>

						<div className="hr">
							<hr />
						</div>
						<div className="total">
							<p className="balance">{(sumIn + sumOut).toLocaleString('en-US')} ₫</p>
						</div>
					</div>

					<div className="space" />

					<div className="daily-summary">
						{
							transData.map((trans, index) => (
								<div className="daily" id="day" key={index}>
									<div className="balance-by-day">
										<div className="day-description-1">
											<p className="day">{trans.date[8] + trans.date[9]}</p>
										</div>

										<div className="day-description-2">
											<p className="day-of-week">{trans.weekday}</p>
											<p className="text-start month-year">{trans.month_year}</p>
										</div>

										<div className="day-balance">
											<p className="balance">{trans.sum} đ</p>
										</div>
									</div>
									{
										trans.transactions.map((tran) => (
											<div className="balance-by-category">
												<div className="balance-detail category">
													<div className="label">
														{/* TODO Img makes text disappear */}
														{/* <img src="https://cdn-icons-png.flaticon.com/512/9118/9118242.png" alt='icon'/> */}
														<p className='fw-bold'>{tran.category_ID.name}</p>
													</div>

													<div className="balance">
														<p className={(tran.amount < 0 ? "negative" : "positive") + " fw-bold"}>{tran.amount.toLocaleString('en-US')} đ</p>
													</div>
												</div>
											</div>
										))
									}
								</div>
							))
						}
					</div>
				</div>
			</>
		);
	}
}