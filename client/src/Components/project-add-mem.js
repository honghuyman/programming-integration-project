import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="form-popup" id="form-add-mem">
				<form action="/project" className="form-container">
					<div className="form-title">
						<p>Project Members</p>
						<div className="icon" onClick={this.closeFormMem}>
							<img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" />
						</div>
					</div>
					<div className="form-subtitle">
						<p>TOTAL CONTRIBUTION</p>
					</div>
					<div className="project-members">
						{/* data (loop) */}
						<div className="member-contribution-details">
							<div className="icon delete">
								<img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" />
							</div>
							<p className="username">@username1</p> {/* data */}
							<p className="amount">+ 5,500,000 ₫</p> {/* data */}
						</div>
						<div className="member-contribution-details">
							<div className="icon delete">
								<img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" />
							</div>
							<p className="username">@username2</p> {/* data */}
							<p className="amount">+ 2,500,000 ₫</p> {/* data */}
						</div>
					</div>
					<div className="new-member">
						<div className="icon add">
							<img src="https://cdn-icons-png.flaticon.com/512/4202/4202259.png" />
						</div>
						<input className="username" type="text" placeholder="Enter username" />
						<p className="amount">0 ₫</p>
					</div>
					<button className="btn save save-cont">SAVE</button>
				</form>
			</div>
		);
	}
}
