import React from 'react'
import styled from "styled-components"
function Title({num, head}) {
    return (
        <TitleWrap>
        <span className="line">
                    <span className="number">{num}</span>
                    <span className="head-title">{head}</span>
        </span>
        </TitleWrap>
    )
}
export const TitleWrap = styled.div`
color: #f5f5f5;
font-weight: 500;
font-family: var(--pFont);
margin-bottom: 1vh;
.line {
    margin: 4vh auto auto 1.5vw;
    width: 28vw;
    height: 47px;
    border-top: 2px solid white;
    position: absolute;
    }
    .head-title{
        text-transform: uppercase;
        margin-left: 8vw;
    }
    .number{
      font-size: 2vw;
    }
     .head-title{
    font-size: 2vw;
    }
`
export default Title
