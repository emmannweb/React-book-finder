import React from "react";

const Search = props => {
  return (
    <input
      type="search"
      onChange={this.changeSearch.bind(this)}
      placeholder={props.Query}
    />
  );
};
export default Search;
