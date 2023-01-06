import React, { Component } from 'react';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Components
import NavBar from '../Components/navbar-project';
import SideBar from '../Components/sideBar';
import ProjectForm from '../Components/project-form';
import ProjectAddCont from '../Components/project-add-cont';
import ProjectAddMem from '../Components/project-add-mem';

export default class Project extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { user_ID: "", project_ID: "", money: 0, projData: [], projMember: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // * Get all project
    componentDidMount()
    {
        // const username = window.localStorage.getItem('userID');

        // TODO Change to username, uncomment the above line
        fetch('http://localhost:3005/all-projects/example')
        .then((response) => response.json())
        .then((json) =>
        {
            json = json.map(o => ({...o, members: []}))
            this.setState({
                projData: json
            });
            console.log(json);
            for (let project of json) {
                fetch('http://localhost:3005/all-members/' + project._id)
                .then((response) => response.json())
                .then((members) => {
                    project.members = members
                    this.setState({
                        projData: json
                    })
                })
            }
        })
    }

    // * Add contribution
    handleSubmit(e)
    {
        e.preventDefault();

        const { project_ID, money } = this.state;
        const user_ID = "63b039df07258122b58d3b2a";
    }

    openFormTrans = (event) =>
    {
        document.querySelector('#form-add-trans').style.display = 'block';
        document.querySelector('.overlay').classList.toggle('blur');
    };

    openFormCont = (event) =>
    {
        document.querySelector('#form-add-cont').style.display = 'block';
        document.querySelector('.overlay').classList.toggle('blur');

        let current_date = new Date().toJSON().slice(0, 10);
        document.querySelector('#form-input-date').innerHTML = current_date;
    };

    openFormMem = (event) =>
    {
        document.querySelector('#form-add-mem').style.display = 'block';
        document.querySelector('.overlay').classList.toggle('blur');
    };
    
    closeFormTrans = (event) =>
    {
        document.querySelector('#form-add-trans').style.display = 'none';
        document.querySelector('.overlay').classList.toggle('blur');
    };

    closeFormCont = (event) =>
    {
        document.querySelector('#form-add-cont').style.display = 'none';
        document.querySelector('.overlay').classList.toggle('blur');
    };

    closeFormMem = (event) =>
    {
        document.querySelector('#form-add-mem').style.display = 'none';
        document.querySelector('.overlay').classList.toggle('blur');
    };

    
    render()
    {
        const { projData } = this.state;

        return (
            <>
                <div className="page-container">
                    <SideBar />
                    <NavBar />
                    <div className="box-project">
                        <div className="project" id="project-1">
                            <div className="project-title">
                                <div className="project-name">
                                    <p>DALAT TOUR</p> {/* data */}
                                </div>
                                <div className="project-target">
                                    <p>
                                        Target: <span className="project-target-amount">10,000,000 ₫</span>
                                        {/* put data into span tag */}
                                    </p>
                                </div>
                            </div>
                            <div className="project-detail">
                                <div className="header">
                                    <div className="current">
                                        <p>
                                            Current total amount: <span className="current-amount">8,000,000 ₫</span>
                                            {/* put data into span tag */}
                                        </p>
                                    </div>
                                    <div className="icon icon-add-cont" onClick={this.openFormCont}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3634/3634526.png" />
                                    </div>
                                    <div className="btn" onClick={this.openFormMem}>
                                        <button className="add-mem">+ MEMBER</button>
                                    </div>
                                </div>
                                <div className="member-contribution">
                                    <div className="contribution-details">
                                        <p className="date">05-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 5,000,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">05-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 2,000,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">04-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 500,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">03-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 500,000 ₫</p> {/* data */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project" id="project-2">
                            <div className="project-title">
                                <div className="project-name">
                                    <p>CHOI TET</p> {/* data */}
                                </div>
                                <div className="project-target">
                                    <p>
                                        Target: <span className="project-target-amount">5,000,000 ₫</span>
                                        {/* put data into span tag */}
                                    </p>
                                </div>
                            </div>
                            <div className="project-detail">
                                <div className="header">
                                    <div className="current">
                                        <p>
                                            Current total amount: <span className="current-amount">800,000 ₫</span>
                                            {/* put data into span tag */}
                                        </p>
                                    </div>
                                    <div className="icon icon-add-cont" onClick={this.openFormCont}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3634/3634526.png" />
                                    </div>
                                    <div className="btn" onClick={this.openFormMem}>
                                        <button className="add-mem">+ MEMBER</button>
                                    </div>
                                </div>
                                <div className="member-contribution">
                                    <div className="contribution-details">
                                        <p className="date">07-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 150,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">07-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 200,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">06-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 300,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">06-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 150,000 ₫</p> {/* data */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay" />
                
                <ProjectForm />
                <ProjectAddCont />
                <ProjectAddMem />
            </>
        )
    }
}