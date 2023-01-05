import React, { Component } from "react";

// Component
import NavBar from '../Components/navbar-project';
import SideBar from "../Components/sideBar";

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