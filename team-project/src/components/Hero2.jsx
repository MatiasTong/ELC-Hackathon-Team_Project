import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

import "./Hero2.scss"

// import PortfolioContext from '../../context/context';

const Header2 = () => {
//   const { hero } = useContext(PortfolioContext);
//   const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    <section id="hero2" className="jumbotron" style={{backgroundColor:"transparent"}}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
          <div className="row">
          <h1 className="hero2-title col-sm-12">
            {"Breast Cancer in Young Women"}{' '}
           <br />
          </h1>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
          <div className="row">
          <h2 className="col-sm-12 hero2-text">
            {"Women who are under 40 years old may feel they are not at risk for breast cancer, but 5% of all cases happen in this group. Diagnosis can be more difficult due to breast tissue density. Also treatment can affect fertility."}
          </h2>

          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1100} distance="30px">
          <p className="hero-cta row justify-content-center mt-5">
            <span className="cta-btn cta-btn--hero">
              <Link activeClass="active" to="section12" spy={true} smooth={true} duration={1000}>
                {'Learn more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header2;