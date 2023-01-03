import React, { Component } from 'react';

// Style
import 'bootstrap/dist/css/bootstrap.css';

const project = [];

export default class Projects extends Component
{
    getData()
    {
        // const username = window.localStorage.getItem('token');

        // TODO Change into username, uncomment above line
        fetch("http://localhost:3005/all-projects/" + 'example', {})
            .then(response => response.json())
            .then(data =>
                {
                    // console.log(data);
                    for (let i = 0; i < data.length; i++)
                    {
                        project.push(data[i]);
                    }
                });
    }

    render()
    {
        this.getData();
        console.log(project[0]);

        return (
            <div className='row justify-content-center'>
                <div className='col-md-6 border text-start mt-5'>
                    <div className='row h-auto p-3 justify-content-around'>
                        <p className='col fw-bold text-uppercase d-inline'>Project name</p>
                        <p className='col text-end d-inline fw-bold text-success'>Money</p>
                    </div>
                </div>
            </div>
        )
    }
}