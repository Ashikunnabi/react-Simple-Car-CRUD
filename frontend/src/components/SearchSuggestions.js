import React from 'react'
import './SearchSuggestion.css'

const SearchSuggestions = (props) => {
  const handleClick = (e) => {
    props.setSearchValue(e.target.innerText);
    props.setResultsValue([]);
    document.getElementsByClassName('searchbar')[0].focus();
  }

  const options = props.results.map(r => (
    <li onClick={handleClick} key={r}>
      {r}
    </li>
  ))
  return <ul className="search_suggestions__ul">{options}</ul>
}

export default SearchSuggestions