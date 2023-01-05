import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class SideBar extends Component
{
    render()
    {
        return (
            <div className="side-bar">
                <div className="icon icon-menu">
                    <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt='menu icon' />
                </div>

                <CustomLink to='/transaction' style={{ textDecoration: 'none' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2211/2211093.png" alt='transaction icon' />
                    <p className='text-dark' >Transaction</p>
                </CustomLink>

                <CustomLink to='/report' style={{ textDecoration: 'none' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170667.png" alt='report icon' />
                    <p className='text-dark'>Report</p>
                </CustomLink>

                <CustomLink to='/project' style={{ textDecoration: 'none'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/9186/9186677.png" alt='project icon' />
                    <p className='text-dark'>Project</p>
                </CustomLink>
            </div>    
        )
    }
}

function CustomLink({ to, children, ...props })
{
    const path = '..' + window.location.pathname;
    const temp = to;
    to = '..' + to;

    return (
        <div className={path.includes(temp) ? "fw-bold icon" : "icon"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}