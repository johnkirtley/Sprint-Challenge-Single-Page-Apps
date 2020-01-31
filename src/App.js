import React from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import { Route } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.main`
text-align: center;
`

export default function App() {
  return (
    <Main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/charactercard">
        <CharacterCard />
      </Route>
    </Main>
  );
}
