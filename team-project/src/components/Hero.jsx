import React, { useContext, useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import SearchForm from './SearchForm'
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import "./Hero.scss"
import {motion} from "framer-motion"
import Navbar from "./Navbar"

// import PortfolioContext from '../../context/context';

const Header = () => {
  //   const { hero } = useContext(PortfolioContext);
  //   const { title, name, subtitle, cta } = hero;

  const [displayForm, setDisplayForm] =useState(false)
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // variables for animation
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     x: "-100vw"
  //   },
  //   in: {
  //     opacity: 1,
  //     x: 0
  //   },
  //   out: {
  //     opacity: 0,
  //     x: "100vw",
  //     scale: 1.2
  //   }
  // };
  
  // const pageTransition = {
  //   type: "tween",
  //   ease: "anticipate",
  //   duration: 0.5
  // };
  
  // const pageStyle = {
  //   position: "absolute"
  // };


  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
  //   <motion.div
  //   style={pageStyle}
  //   // initial="initial"
  //   // animate="in"
  //   exit="out"
  //   variants={pageVariants}
  //   transition={pageTransition}
  // >
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title row">
            {'Be in the know'}{' '}
            {/* <span className="text-color-main">{'Your Name'}</span> */}
            <br />
            {"Find where you can do your mammogram today."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="hero-cta row" style={{marginBottom: "10px"}}>
            <div className="cta-btn cta-btn--hero" style={{marginBottom: "10px"}}onClick = {()=>setDisplayForm(!displayForm)}>
              <Link className="link" smooth duration={1000}>
                {'Know more'}
              </Link>
            </div>

            {displayForm ? <SearchForm displayForm ={displayForm} isDesktop={isDesktop} isMobile ={isMobile}/> : ""}


          </div>
        </Fade>
      </Container>
    </section>
    // </motion.div>
  );
};

export default Header;