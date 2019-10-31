import React from "react";

const Search = props => {
  return (
    <input
      className="search__input"
      type="search"
      placeholder={props.Placeholder}
      onChange={props.SearchProps}
    />
  );
};
export default Search;
