import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { useFormikContext } from "formik"
import { Link } from 'react-router-dom';
import "./SearchForm.css"

function SearchForm({ isDesktop, isMobile, displayForm }) {
  const { values, handleChange } = useFormikContext();


  return (

    <Fade left duration={500} delay={100} distance="50px">

      <div id="search-form">
        <Row className="justify-content-center">


          <Form.Group controlId="form" className=" col-3 my-auto">
            <Form.Control
              type="text"
              name="age"
              placeholder="Enter Age"
              value={values.age}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group className=" col-6 my-auto">
            <Form.Control as="select" placeholder="select" name="insuranceType" onChange={handleChange} >
              <option value="">- Select Insurance Type -</option>
              <option value="state insurance">State Insurance</option>
              <option value="private insurance">Private Insurance</option>
              <option value="none"> No Insurance</option>
            </Form.Control>
          </Form.Group>
          <div className="my-auto col-2">
            <Link to="/result" style={{ display: "flex" }}>
              <Button variant="primary" className="my-auto"><b>
                Search</b></Button>
            </Link>
          </div>
        </Row>
      </div>

    </Fade>
  )
}

SearchForm.propTypes = {

}

export default SearchForm

