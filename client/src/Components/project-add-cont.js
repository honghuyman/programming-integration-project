import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="form-popup" id="form-add-cont">
				<form action="/project" className="form-container">
					<div className="form-title">Add contribution</div>
					<div className="form-input">
						<div className="form-input-date">
							<p className="label">Date</p>
							<p className="value" id="form-input-date" />
						</div>
						<div className="form-input-amount">
							<p className="label">Amount</p>
							<input type="number" placeholder="0" />
						</div>
					</div>
					<div className="form-buttons">
						<button className="btn save save-cont">SAVE</button>
						<button className="btn cancel cancel-cont" onClick={this.closeFormCont}>
							CANCEL
						</button>
					</div>
				</form>
			</div>
		);
	}
}
