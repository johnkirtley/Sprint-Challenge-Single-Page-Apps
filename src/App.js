import React from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/charactercard">
        <CharacterCard />
      </Route>
    </main>
  );
}
