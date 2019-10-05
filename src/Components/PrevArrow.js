import React from 'react'
import styled from "styled-components"
function PrevArrow({ className, onClick, style}) {
    return (
        <PArrowWrapper
            className={className}
            onClick={onClick}
            style={{ ...style, color: "white", fontSize: "1.5vw", zIndex: "99", display: "block", opacity: "0.8", marginRight: "2vw", marginLeft: "2vw" }}
        >
            <i className="fas fa-arrow-circle-left"></i>
        </PArrowWrapper>
    )
}
export const PArrowWrapper = styled.span`

`
export default PrevArrow
