import React, { Component } from 'react';
import '../App.css';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Components
import NavBar from '../components/navbar-project';
import SideBar from '../components/sideBar';
// import Projects from '../components/projects';

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
                this.setState({
                    projData: json
                });
                console.log(json);
            })
    }

    // * Add contribution
    handleSubmit(e)
    {
        e.preventDefault();

        const { project_ID, money } = this.state;
        const user_ID = "63b039df07258122b58d3b2a";
    }

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

    openFormProj = (event) =>
    {
        document.querySelector('#form-add-proj').style.display = 'block';
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

    clickLastMonthTab = (event) =>
    {
        document.querySelector('.tab-last-month').classList.toggle('hidden');
        document.querySelector('.tab-this-month').classList.add('hidden');
        document.querySelector('.tab-future').classList.add('hidden');
        console.log('Click last month tab');
    };

    clickThisMonthTab = (event) =>
    {
        document.querySelector('.tab-this-month').classList.toggle('hidden');
        document.querySelector('.tab-last-month').classList.add('hidden');
        document.querySelector('.tab-future').classList.add('hidden');
        console.log('Click this month tab');
    };

    clickFutureTab = (event) =>
    {
        document.querySelector('.tab-future').classList.toggle('hidden');
        document.querySelector('.tab-last-month').classList.add('hidden');
        document.querySelector('.tab-this-month').classList.add('hidden');
        console.log('Click future tab');
    };


    render()
    {
        const { projData, projMember } = this.state;

        return (
            <>
                <SideBar />
                <NavBar />

                <div className="page-container">
                    <div className="box-project">
                        {
                            projData.map((proj, index) => (
                                <div className="project" key={"project-" + index}>
                                    <div className="project-title">
                                        <div className="project-name">
                                            <p>{proj.project_name}</p>
                                        </div>

                                        <div className="project-target">
                                            <p>
                                                Target: <span className="project-target-amount">{proj.target.toLocaleString('en-US')} ₫</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="project-detail">
                                        <div className="header">
                                            <div className="current">
                                                <p className='text-start pt-3'>
                                                    Current total amount: <span className={"current-amount " + (proj.reality_money < proj.target ? "text-danger" : "text-success")}>{proj.reality_money.toLocaleString('en-US')} ₫</span>
                                                </p>
                                            </div>

                                            {/* TODO get project ID */}
                                            <div 
                                                value={proj._id}
                                                className="icon icon-add-cont mt-2" 
                                                onClick={(e) => this.projID_openFormCont(e)}
                                            >
                                                <img src="https://cdn-icons-png.flaticon.com/512/3634/3634526.png" alt='icon' />
                                            </div>

                                            <div className="btn" onClick={this.openFormMem}>
                                                <button className="add-mem">+ MEMBER</button>
                                            </div>
                                        </div>

                                        {/* * Members */}
                                        <div className="member-contribution">
                                            {
                                                projMember.map((mem, idx) => (
                                                    <div className="contribution-details">
                                                        <p className="username">{mem.username}</p> {/* data */}
                                                        <p className="privilege">{mem.priviledge}</p> {/* data */}
                                                        <p className="amount">{mem.money?.toLocaleString('en-US')} ₫</p> {/* data */}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="overlay" />
                <div className="form-popup" id="form-add-cont">
                    <form action="/project" onSubmit={this.handleSubmit} className="form-container">
                        <div className="form-title fw-bold">Add contribution</div>

                        <div className="form-input amount">
                            <p className="label">Amount</p>
                            <input
                                type="number"
                                placeholder="0"
                                onChange={(e) => this.setState({ money: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn save save-cont">SAVE</button>

                        <button className="btn cancel cancel-cont" onClick={this.closeFormCont}>
                            CANCEL
                        </button>
                    </form>
                </div>

                <div className="form-popup" id="form-add-mem">
                    <form action="/project" className="form-container">
                        <div className="form-title">
                            <p>Project Members</p>
                            <div className="icon" onClick={this.closeFormMem}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt='icon' />
                            </div>
                        </div>

                        <div className="form-subtitle">
                            <p>TOTAL CONTRIBUTION</p>
                        </div>

                        <div className="project-members">
                            {/* data (loop) */}
                            <div className="member-contribution-details">
                                <div className="icon delete">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" alt='icon' />
                                </div>

                                <p className="username">@username1</p> {/* data */}
                                <p className="amount">+ 5,500,000 ₫</p> {/* data */}
                            </div>

                            <div className="member-contribution-details">
                                <div className="icon delete">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" alt='icon' />
                                </div>

                                <p className="username">@username2</p> {/* data */}
                                <p className="amount">+ 2,500,000 ₫</p> {/* data */}
                            </div>
                        </div>

                        <div className="new-member">
                            <div className="icon add">
                                <img src="https://cdn-icons-png.flaticon.com/512/4202/4202259.png" alt='icon' />
                            </div>

                            <input className="username" type="text" placeholder="Enter username" />
                            <p className="amount">0 ₫</p>
                        </div>

                        <button className="btn save save-cont">SAVE</button>
                    </form>
                </div>
            </>
        )
    }
}