import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { RiStethoscopeFill, RiStethoscopeLine } from "react-icons/ri"
import { Row, Col, Button } from "react-bootstrap"
import {StyledLikeButton} from "../styles/DoctorButton"

function DoctorButton(props) {
    const [isLiked, setIsLiked] = useState(true);

    return (
        <div>
            {isLiked ?
                        <StyledLikeButton disabled 
                            onClick={() => setIsLiked(!isLiked)}>
                            < RiStethoscopeFill style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3
                        </StyledLikeButton> :
                       <StyledLikeButton 
                       onClick={() => setIsLiked(!isLiked)}>
                       < RiStethoscopeLine style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3
                   </StyledLikeButton>
                    }
            
        </div>
    )
}

DoctorButton.propTypes = {

}

export default DoctorButton

