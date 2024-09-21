import React from "react";

export default function Search() {
  return (
    <form className="search-form" id="search-form">
      <input
        type="search"
        placeholder="Enter a City..."
        required
        className="search-form-input"
        id="search-form-input"
      />
      <input type="submit" value="Search" className="search-form-button" />
    </form>
  );
}
