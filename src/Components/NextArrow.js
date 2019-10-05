import React from 'react'
import styled from "styled-components"
function NextArrow({ className, onClick, style }) {
    return (
        <NArrowWrapper
            className={className}
        onClick={onClick}
        style={{ ...style, color: "white", fontSize: "1.5vw", zIndex: "99", display: "block", opacity: "0.8", marginRight: "2.5vw" }}
        >
            <i className="fas fa-arrow-circle-right"></i>
        </NArrowWrapper>
    )
}
export const NArrowWrapper = styled.span`
`
export default NextArrow
