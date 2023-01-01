import React, { Component } from "react";

export default class SignUp extends Component
{
    render()
    {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <h3 className="mt-3">Sign Up</h3>

                    <div className="mt-3">
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            onChange={(e) => this.setState({ user: e.target.value })}
                        />
                    </div>

                    <div className="m-3">
                        <label>Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => this.setState({ pass: e.target.value })}
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}