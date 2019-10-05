import React, {useState} from 'react'
import styled from "styled-components";
import bars from "../bars.gif"

function Loader() {

    const [pre, setPre] = useState("loaded")
    return (
        <LoaderWrapper id="loader-wrapper" class="loaded">
            <div className="loader"></div>
                <div className="loader-section section-left">

                </div>
                <div className="loader-section section-right">

                </div>
        </LoaderWrapper>
    )
}
const LoaderWrapper = styled.div`

`
export default Loader
