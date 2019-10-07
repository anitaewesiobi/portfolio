import React from 'react'
import styled from "styled-components"
import Title from "./Title"
import AnitaLogo from "../AnitaLogo.png"

function Header() {
    return (
  
        <HeaderWrapper className="container-fluid section">
        <div className="name text-justify"><p>Anita</p><p>Ewesiobi</p></div>
        <div className="row top-row">
          <div className="col-4 left-header">
          <Title num="01" head="Portfolio"/>
            <div className="swipe text-left"></div>
          </div>
          <div className="banner col-8">
            <img src={AnitaLogo} alt="logo" className="logo" />
            <video data-keepplaying src="https://www.dropbox.com/s/50mynj58cxt7r3x/bgVid.mp4?raw=1" autoPlay={true} loop={true} muted className="banner__video right-header"></video>
            <div className="about-section">
              <div className="about-me text-right">
                developing purposeful web applications
          </div>
            </div>
          </div>
        </div>
        </HeaderWrapper>
    )
}
export const HeaderWrapper = styled.header`
font-family: var(--hFont);
color: #e0e0e0;
background-color: black;
position: relative;
margin-bottom:0;
padding-bottom:0;
.swipe{
  color: white;
  opacity: 0.4;
  font-size:.9vw;
  text-transform: uppercase;
  margin-top: 95vh;
}
.logo{
  position: absolute;
  top:0;
  right:1vw;
  z-index: 9;
  width: 150px; 
  height: 150px;

}
.fa-arrow-circle-down{
margin-top: 90vh;
font-size: 2vw;
opacity: 0.3;
margin-left: 2vw;
}
.name{
  margin-left: 17.5vw;
  margin-top: 28vh;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #f5f5f5;
  font-weight: 900;
  color: transparent;
  text-transform: uppercase;
  position: absolute;
  z-index:9;
  font-size: 9vw;
}

.banner {
  position: relative;
  overflow: hidden;
}
.banner__video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
}
  .top-row{
  height: 100vh;
}
.left-header{
  z-index: 2;
  background-color: black;
}


.about-section{ 
  color: black;
  position: absolute;
  z-index: 9;
  bottom: 4vh;
  right: 2vw;

  }

.about-me{
  font-size: 1vw;
  text-transform: uppercase;
  font-weight: 500;
font-family: var(--pFont);
}

`

export default Header
