import React from 'react'
import PropTypes from 'prop-types'
import {Popover, OverlayTrigger, Button} from "react-bootstrap"

function PopoverButton() {
    const popover = (
        <Popover id="popover-basic">
          {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
          <Popover.Content>
            Was this resource helpful? <br/>
            How would you rate the overall accuracy? ⭐⭐⭐⭐⭐
          </Popover.Content>
        </Popover>
      );

    return (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
    <Button variant="outline-info" size="sm" style={{zIndex: "99"}}>Helpful</Button>
    </OverlayTrigger>
    )
}

PopoverButton.propTypes = {

}

export default PopoverButton

 