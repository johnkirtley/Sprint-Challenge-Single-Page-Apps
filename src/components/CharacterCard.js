import React from "react";
import CharacterList from "./CharacterList";
import { Link } from "react-router-dom";

const CharacterCard = () => {


  return (
    <div>
      <Link to="/">Home</Link>
      <CharacterList />
    </div>
  )
}

export default CharacterCard;