import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Row, Col, Button } from "react-bootstrap"
import {StyledLikeButton} from "../styles/LikeButton"

function LikeButton(props) {
    const [isLiked, setIsLiked] = useState(true);

    return (
        <div>
            {isLiked ?
                        <StyledLikeButton 
                            onClick={() => setIsLiked(!isLiked)}>
                            < AiFillHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3
                        </StyledLikeButton> :
                       <StyledLikeButton 
                       onClick={() => setIsLiked(!isLiked)}>
                       < AiOutlineHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3
                   </StyledLikeButton>
                    }
            
        </div>
    )
}

LikeButton.propTypes = {

}

export default LikeButton

