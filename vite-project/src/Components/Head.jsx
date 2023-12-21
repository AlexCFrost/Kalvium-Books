// Head.js
import React from 'react';
import { Link } from 'react-router-dom';

function Head({ setSearchData }) {
  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <div id="Cont">
        <div className="head">
          <div id="title">
            <h1>Kalvium</h1>
            <h1>Books</h1>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" onChange={handleSearchChange} />
        </div>
        <div className="register">
          <button className="register-btn">
            <Link to="/form">Register Here</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Head;
