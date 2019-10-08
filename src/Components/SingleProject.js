import React from 'react'
import styled from "styled-components"
import Title from './Title';
function SingleProject({ poster, projectLink, github, color, mockup, icon1, icon2, icon3, icon4, icondesc1, icondesc2, icondesc3, icondesc4, title, subtitle, solution, challenge, slide }) {

    return (

        <SingleProjectWrapper textColor={color} className="section">
            <Title
                head="Projects"
                num={slide}
            />
            <div className="projects-row row mx-1">
                <div className=" far-left text-left col-4">
                    <div className="project-title text-left"> {title}</div>
                    <div className="title-subtext text-left">{subtitle}
                         <div className="underline mx-auto"></div></div>
                </div>
                <div className="col-5 text-center middle">
                    <video data-keepplaying src={mockup} autoPlay={true} loop={true}  poster={poster} muted className="banner__mockup right-header" ></video>
                </div>
                <div className="col-3 text-left far-right">
                    <div className="project-description">
                        <div className="technologies text-center mb-1">Technologies</div>
                        <div className="icons">
                            <div className="row text-center mb-2">
                                <div className="mx-auto">
                                    <i className={icon1}></i>
                                    <div className="icon-desc">{icondesc1}</div>
                                </div>
                                <div className="mx-auto">
                                    <i className={icon2}></i>
                                    <div className="icon-desc">{icondesc2}</div>
                                </div>
                                <div className="mx-auto">
                                    <i className={icon3}></i>
                                    <div className="icon-desc">{icondesc3} </div>
                                </div>
                                <div className="mx-auto">
                                    <i className={icon4}></i>
                                    <div className="icon-desc">{icondesc4}</div>
                                </div>

                            </div>
                        </div>
                        <div className="features text-center mt-4">
                            Description
                        </div>
                        <div className="description">
                            <div className="challenge mt-1 mb-2"> <span className="challenge-title mr-2">Challenge:</span>{challenge}
                            </div>
                            <div className="solution my-4">
                                <span className="solution-title">
                                    Solution:
                         </span>
                            {solution}
                        </div>
                    </div>
                    </div>
                    <div className="buttons text-center">
                        <a target="_blank" href={projectLink}>
                            <button className="mx-3 button pulse">View Site</button>
                        </a>
                        <a href={github} target="_blank">
                            <button className="mx-3 button pulse">View Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </SingleProjectWrapper>

    )
}
export const SingleProjectWrapper = styled.div`
height: 100vh;
width:100%;
color: white;
background-color: black;
.project-image,.project-title, .project-description{
    margin-top: 50%;
}
.project-description{ 
    font-family: var(--hFont);
    font-size: 2vw;
}
.middle {
  position: relative;
  overflow: hidden;
}
.challenge-title,.solution-title{
    font-size: 1.2vw;
    text-transform: uppercase;
    font-family: var(--hFont);
    color: ${props => props.textColor};
}
.challenge, .solution{
    font-size: .9vw;
    

}
.technologies, .features{
     text-transform: uppercase;
    font-weight: 400;
    font-family: var(--pFont);
}
.description{

} 
.icon-desc{
   font-family: var(--hFont);
   font-weight: 400;
   font-size: 1vw;
}

.banner__mockup {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 144%;
  height: auto;
  min-height: 100%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  margin-left: .5vw;
 
}
.fab{
    color: ${props => props.textColor};
}
button{
    color: black;
    background-color:${props => props.textColor};
    border: none;
    font-size: 1vw;
    padding:1vw;
    font-weight: 700;
}
button:focus, button:hover{
    background-color:darken(${props => props.textColor},10%);
    border: none;
    outline: none;
    box-shadow: 0 4px 17px rgba(0,0,0,0.2);
    transform: translate3d(0, -2px, 0);
}
.projects-row{
    height: 100vh;
}
.title-subtext{
    text-transform: uppercase;
    font-weight: 200;
    font-family: var(--hFont);
    color: white;
    font-size: 2.5vw;
}

.project-title{
    font-family: var(--hFont);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${props => props.textColor};
    font-weight: 900;
    color: transparent;
    text-transform: uppercase;
    font-size: 8vw;
}

.far-left, .middle{
    border-right: 0.04em gray dashed;
}

`
export default SingleProject
