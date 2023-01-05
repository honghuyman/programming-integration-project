import React, { Component } from "react";

// Component
import NavBar from '../components/navbar-project';
import SideBar from "../components/sideBar";

export default class NewProject extends Component
{
    render()
    {
        return (
            <>
                <SideBar />
                <NavBar />

                <p>New Project page</p>
            </>
        )
    }
}