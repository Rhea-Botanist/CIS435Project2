import React from 'react';

function SearchBar({ filterText, onFilterChange }) {
    return (
        <div className="search-bar">
            <input id="search" type="text" value={filterText} onChange={(e) => onFilterChange(e.target.value)} placeholder="Filter via name or email"/>
        </div>
    );
}

export default SearchBar;