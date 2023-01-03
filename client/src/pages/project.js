import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// Components
import NavBar from '../components/navbar-project';
import SideBar from '../components/sideBar';
import Projects from '../components/projects';

export default class Project extends Component
{
    render()
    {
        return (
            <>
                <SideBar />
                <NavBar />

                <Projects />
            </>
        )
    }
}