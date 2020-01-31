import React from "react";
import SearchForm from "./SearchForm";
import {
  Link
} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)
`
text-decoration: none;
color: green;

&:hover {
color: #9AC4F8;
}
`

const CharacterCard = () => {

  return ( <
    div >
    <
    StyledLink to = "/" > Home < /StyledLink> <
    SearchForm / >
    <
    /div>
  )
}

export default CharacterCard;