import React, { Component } from 'react';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            project_name: "",
            target: 0,
            start_date: "",
            end_date: "",
            manager_id: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();

        const { project_name, target, start_date, end_date } = this.state;
        const manager_id = "63b039df07258122b58d3b2a";

        if (project_name === "" || target === 0 || target === "" || start_date === "" || end_date === "")
        {
            this.closeFormProj();
            return;
        }

        fetch("http://localhost:3005/new-project", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                project_name, target, start_date, end_date, manager_id
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
        this.closeFormProj();
    }

    openFormProj = (event) =>
    {
        document.querySelector('#form-add-proj').style.display = 'block';
        document.querySelector('.overlay').classList.toggle('blur');
    };

    closeFormProj = (event) =>
    {
        document.querySelector('#form-add-proj').style.display = 'none';
        document.querySelector('.overlay').classList.toggle('blur');

        // TODO Check
        window.location.href = "/project";
    };

    render()
    {
        return (
            <>
                <div className="nav-bar">
                    {/* TODO Change */}
                    {/* <div className={window.location.pathname === '/project' ? "d-none my-wallet" : "my-wallet"}>
                    <div className="icon icon-my-wallet">
                        <img src="https://cdn-icons-png.flaticon.com/512/60/60484.png" alt='wallet icon' />
                    </div>

                    <div className="my-wallet-text">
                        <p className="wallet-label">Project's Wallet</p>
                        <p id="wallet-balance">xxx,000 ₫</p>
                    </div>
                </div> */}

                    <div className='right-btn justify-content-center'>
                        <button className='btn project' onClick={this.openFormProj}>+ PROJECT</button>
                    </div>
                </div>

                <div className="overlay" />
                <div className="form-popup" id="form-add-proj">
                    <form action="/project" onSubmit={this.handleSubmit} className="form-container">
                        <div className="form-title text-center fw-bold">Add Project</div>

                        <div className="form-input name">
                            <p>Name</p>
                            <input 
                                type="text" 
                                autoComplete="true" 
                                onChange={(e) => this.setState({ project_name: e.target.value })}
                            />
                        </div>

                        <div className="form-input target">
                            <p>Target</p>
                            <input 
                                type="number" 
                                placeholder="0" 
                                onChange={(e) => this.setState({ target : e.target.value })} 
                            />
                        </div>

                        <div className="form-input">
                            <p>Start date</p>
                            <input 
                                type="date" 
                                onChange={(e) => this.setState({ start_date: e.target.value })}
                            />
                        </div>

                        <div className="form-input">
                            <p>End date</p>
                            <input 
                                type="date" 
                                onChange={(e) => this.setState({ end_date: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn save">SAVE</button>

                        <button className="btn cancel cancel-proj" onClick={this.closeFormProj}>
                            CANCEL
                        </button>
                    </form>
                </div>
            </>
        )
    }
}