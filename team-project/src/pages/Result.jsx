import React from 'react'
import PropTypes from 'prop-types'

function Result(props) {
    return (
        <div>
            {/* Tom, May need referral to a radiologist from a primary care doctor, 
            most insurance should cover through affordable cafe act,
            40 and over statistics with credible sources*/}
            <h1>Age 40 and over and has state insurance</h1>
            <h1>Age 40 and over and has private insurance</h1>
            
            {/* Alan Sliding income scale, high risk patients determined by doctor 
            can get insurance coverage, reserach high risk exception referrals*/}
            <h1>Age under 40 and has state/private insurance</h1>
             
             {/* Matias Not covered by Affordable Care Act but they can go to clinics
              that have a sliding pace scale or free events, or participate in a study, medicaid */}
             <h1>Age under 40 and has no insurance/low income</h1>
            
            {/* Shirley call cdc number for your state on https://www.cdc.gov/cancer/nbccedp/screenings.htm , medicaid*/}
            <h1>Age 40 and over and has no insurance/low income</h1>
            
           {/* book now button */}

            {/* apply medicaid, consult with doctor to see if high risk */}
        </div>
    )
}

Result.propTypes = {

}

export default Result

