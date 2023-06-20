import React, { useState } from "react";
import SearchButton from "./SearchButton";

<<<<<<< Updated upstream
const Search = () => {
  const [searchInput, setSearchInput] = useState(``);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
=======
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    search(searchInput);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
>>>>>>> Stashed changes
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearchSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
<<<<<<< Updated upstream
                onChange={handleSearchInput}
=======
                onChange={handleInputChange}
>>>>>>> Stashed changes
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
