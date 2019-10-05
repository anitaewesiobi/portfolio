import React from 'react'
import styled from "styled-components"
function NavBar() {

    return (
        <NavWrap className="nav-wrapper">
            <nav className="navbar navbar-expand-md justify-content-center">
                <span  className="navbar-brand d-flex w-30"></span>              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <span className="nav-link">PROJECTS</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">ABOUT</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">CONTACT</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavWrap>
    )
}

export const NavWrap = styled.div`
position: sticky;
top:0;
z-index: 4;
background: transparent !important;
margin-top: -60px;

`
export default NavBar
