import React, { useState, useEffect } from "react";
import axios from "axios";

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


  return (
    <section className="search-form">
      <form>
        <label>Search Character Name</label>
        <input type="text" onChange={handleChanges} value={query} />
      </form>
      {characters.map(character => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
          </div>
        )
      })}
    </section>
  );
}

export default SearchForm;
