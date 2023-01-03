import React, { Component } from "react";

export default class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        const { username, password } = this.state;

        // * Fill the form
        if (username === "" || password === "")
        {
            alert("Please fill the form.");
            return;
        }

        // * Fetch
        fetch("http://localhost:3005/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })    // Send username & password to BE
        })
            .then(response => response.json())
            .then(data =>
            {
                console.log(data.message);

                // Display message
                if (data.message === "SUCCESS")
                {
                    window.localStorage.setItem("token", username);
                    // TODO redirect
                    window.location.href = "../project";
                }
                else if (data.message === "NOT REGISTERED")
                {
                    alert("You have not registered. Redirecting to register page...");
                    window.location.href = "./register";
                }
                else if (data.message === "WRONG PASSWORD")
                {
                    alert("Wrong password. Please try again.");
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
                <div className="col-md-6 d-none d-sm-block p-0">
                    <img src="login.png" alt="login" className="w-100" />
                </div>

                {/* Login form */}
                <form 
                    onSubmit={this.handleSubmit} 
                    className="col-md-6 col-sm-12 px-5 m-auto text-start"
                >
                    <h1 className="h2 mt-3 text-light">LOGIN</h1>

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

                    <div className="my-3 text-center">
                        <button
                            type="submit"
                            className="btn text-light px-3"
                            style={{ backgroundColor: `#B6A400` }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}