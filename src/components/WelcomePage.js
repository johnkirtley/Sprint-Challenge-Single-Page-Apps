import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TweenMax } from "gsap";

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

  // const imgAnimation = useRef(null);

  // useEffect(() => {
  //   TweenMax.fromTo(
  //     imgAnimation,
  //     0.5,
  //     { y: 18 },
  //     { y: -18, yoyo: true, repeat: -1 }
  //   );
  //   TweenMax.fromTo(
  //     imgAnimation,
  //     0.5,
  //     { y: -18 },
  //     { y: 18, repeat: -1, yoyo: true }
  //   );
  // }, []);




  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <StyledLink to="/charactercard">Character Cards</StyledLink>
        </div>
        <MainImage
          // ref={imgAnimation}
          className="main-img"
          id="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
