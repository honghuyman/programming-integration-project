import React, { Component } from "react";

export default class Register extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { username: "", password: "", password2: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        const { username, password, password2 } = this.state;

        // * Fill the form
        if (username === "" || password === "" || password2 === "")
        {
            alert("Please fill the form.");
            return;
        }

        // * Check confirmed password
        if (password !== password2)
        {
            alert("The passwords are not the same. Please try again.");
            return;
        }

        // * Fetch
        fetch("http://localhost:3005/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {console.log(data.message);
            
            // Display message
            if (data.message === "ALREADY EXIST")
            {
                alert("This username is already exist. Please choose other username");
            }
            else if (data.message === "SUCCESS")
            {
                alert("Register successful. Redirecting to login page...");
                window.location.href = "./login";
            }
        });
    }

    render()
    {
        return (
            <div 
                className="row" 
                style={{ backgroundImage: "url(bg-login.jpeg)", backgroundSize: `100% 100%` }}
            >
                {/* Image */}
                <div className="col-md-6 d-none d-sm-block">
                    <img src="login.png" alt="login" className="w-100" />
                </div>

                {/* Login form */}
                <form onSubmit={this.handleSubmit} className="col-md-6 col-sm-12 px-5 m-auto text-start">
                    <h1 className="h2 mt-3 text-light">REGISTER</h1>

                    <div className="mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={(e) => this.setState({ username: e.target.value })}
                        />
                    </div>

                    <div className="mt-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </div>

                    <div className="mt-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            onChange={(e) => this.setState({ password2: e.target.value })}
                        />
                    </div>

                    <div className="my-3 text-center">
                        <button 
                            type="submit" 
                            className="btn text-light px-3" 
                            style={{backgroundColor: `#B6A400`}}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}