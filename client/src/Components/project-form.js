import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="form-popup" id="form-add-proj">
				<form action="/project" className="form-container">
					<div className="form-title">Add Project</div>
					<div className="form-input name">
						<p>Name</p>
						<input type="text" autoComplete="true" />
					</div>
					<div className="form-input target">
						<p>Target</p>
						<input type="number" placeholder="0" />
					</div>
					<div className="form-input date">
						<p>Start date</p>
						<input type="date" />
					</div>
					<div className="form-input date">
						<p>End date</p>
						<input type="date" />
					</div>
					<button className="btn save">SAVE</button>
					<button className="btn cancel cancel-proj" onClick={this.closeFormProj}>
						CANCEL
					</button>
				</form>
			</div>
		);
	}
}
