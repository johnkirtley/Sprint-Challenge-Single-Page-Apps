import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { TweenMax, Linear, gsap } from "gsap";

const Card = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: 2px solid black;
width: 85%;
padding: 5% 0;
margin: 5% auto;
background-color: #9AC4F8;
border-radius: 10px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

}
`

const Grid = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-top: 5%;
`

const FormContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin-top: 5%;
`

const Attr = styled.span`
color: white;
`

const StyledImg = styled.img`
width: 85%;
`

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const searchResults = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(searchResults);
      })
      .catch(err => {
        console.log(err);
      })
  }, [query])


  const handleChanges = (e) => {
    setQuery(e.target.value);
  }

  let cards = useRef(null);

  useEffect(() => {
    gsap.to(".cards",
      {
        duration: 4,
        ease: Linear.easeIn
      })
  })

  function disperseCards() {
    gsap.to(".cards",
      {
        x: "random(1300, -1150, 1)",
        y: "random(-1300, 1400, 1)",
        duration: 4,
        repeat: -1,
        yoyoEase: true,
        ease: Linear.easeOut

      })
  }




  return (
    <>
      <form>
        <FormContainer>
          <label>Search Character Name</label>
          <input type="text" onChange={handleChanges} value={query} />
        </FormContainer>
      </form>
      <Grid>
        {characters.map(character => {
          return (
            <>
              <Card key={character.id} className="cards" ref={element => { cards = element }} onClick={disperseCards}>
                <StyledImg src={character.image} alt="" />
                <h2>
                  <div>
                    <Attr>Name:</Attr>
                  </div>
                  <div>
                    {character.name}
                  </div>
                </h2>
                <h2>
                  <div>
                    <Attr>Status:</Attr>
                  </div>
                  <div>
                    {character.status}
                  </div>
                </h2>
                <h2>
                  <div>
                    <Attr>Species:</Attr>
                  </div>
                  <div>
                    {character.species}
                  </div>
                </h2>
              </Card>
            </>
          )
        })}
      </Grid>
    </>
  );
}

export default SearchForm;
