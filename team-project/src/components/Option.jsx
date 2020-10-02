import React from 'react'
import PropTypes from 'prop-types'
import {StyledButton} from "../styles/Option";

function Option({children, setModalShow}, ...props) {
    return (
        <div class ="option">
            <StyledButton
                // style={{ width: "80%", margin:"0.5rem 0rem"}}
                onClick={() => setModalShow(true)}
                {...props}
            >
                {children}
            </StyledButton>

        </div>
    )
}

Option.propTypes = {

}

export default Option



