import React, { useState } from "react";

export default function SearchForm() {

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search Character Name</label>
        <input type="text" />
      </form>
    </section>
  );
}
