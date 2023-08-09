import React from "react";

function Search({ setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          placeholder="Search by name..."
          onChange={handleSearchChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;