import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <StyledLink to="/charactercard">Character Cards</StyledLink>
        </div>
        <MainImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
