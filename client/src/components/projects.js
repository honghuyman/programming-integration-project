import React, { Component } from 'react';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class Projects extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            projs: [],
            DataIsLoaded: false
        };
    }

    componentDidMount()
    {
        // const username = window.localStorage.getItem('username');

        // TODO Change "example" into username, uncomment the above line
        fetch("http://localhost:3005/all-projects/" + "example")
            .then((res) => res.json())
            .then((json) =>
            {
                this.setState({
                    projs: json,
                    DataIsLoaded: true
                });
            })
    }

    render()
    {
        const { DataIsLoaded, projs } = this.state;
        if (!DataIsLoaded)
            return (
                <div>
                    <h1> Please wait some time.... </h1>
                </div>
            );

        return (
            <div className='row justify-content-center'>
                <div className='col-md-6 border text-start mt-5'> {
                    projs.map((proj) => (
                        <div className='row h-auto p-3 justify-content-around'>
                            <p className='col fw-bold text-uppercase d-inline'>{proj.project_name}</p>
                            <p className='col text-end d-inline fw-bold text-success'>{proj.reality_money} đ</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}