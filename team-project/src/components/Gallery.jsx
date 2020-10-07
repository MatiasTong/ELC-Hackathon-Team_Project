import React, { useContext, useState, useEffect } from 'react';
import { Carousel, Container, Card, Button, Form, Image } from 'react-bootstrap';
import "../components/Hero.scss"
import "../App.css"
import "./Gallery.scss"
import PropTypes from 'prop-types'



function Gallery(props) {


    return (
        <div>
            <Container className="py-1">
                <Carousel className="li">
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="./mam1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="./mam2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="./mam3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="./mam4.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="./mam5.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </Container>

        </div>
    )
}

Gallery.propTypes = {

}

export default Gallery
