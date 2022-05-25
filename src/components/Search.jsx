import React, { useState }  from "react";


export const Search = (props) => {
 
  const {searchMovies} = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

   const handleKey = (event) => {
    if (event.key === "Enter") {
      props.searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
      setType(event.target.dataset.type);
      searchMovies(search, event.target.dataset.type)
  };

  
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            id="email_inline"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch( e.target.value );
            }}
            className="validate"
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search,type)}
          >
            Search
          </button>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

