import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TweenMax, Linear } from "gsap";

const StyledLink = styled(Link)`
text-decoration: none;
color: green;

&:hover {
  color: rgb(154, 200, 227);
}
`

const MainImage = styled.img`
margin-top: 5%;
`

export default function WelcomePage() {

  let mainImage = useRef(null);

  useEffect(() => {
    TweenMax.to(
      mainImage,
      1,
      {
        repeat: 0,
        rotation: 0,
        ease: Linear.easeNone
      }
    )
  }, [])


  function scaleDown() {
    TweenMax.to(mainImage, 1, {
      scale: 0.75,
      repeat: 0,
      yoyo: false
    });
  }

  function scaleUp() {
    TweenMax.to(mainImage, 1, {
      scale: 2.0,
      ease: Linear.ease,
      rotation: 360,
      yoyo: true,
      repeat: 1
    });
  }



  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <StyledLink to="/charactercard">Character Cards</StyledLink>
        </div>
        <MainImage
          ref={element => { mainImage = element }}
          className="main-img"
          id="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          onMouseEnter={scaleUp}
          onMouseLeave={scaleDown}
        />
      </header>
    </section>
  );
}
