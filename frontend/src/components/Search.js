import React, { Component } from 'react'
import axios from 'axios'

import SearchSuggestions from './SearchSuggestions'

const API_URL = 'http://127.0.0.1:8000/car/search/'

class Search extends Component {
  state = {
    error: false,
    query: '',
    searchVal: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?q=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
      searchVal: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        // if (this.state.query.length % 2 === 0) {
          this.getInfo()
        // }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  handleSubmit = (e) => {
    // Enter key is disabled
    if (e.key === 'Enter'){
      e.preventDefault();
    }
  }

  setSearchValue = (text) => {
    this.setState({
      searchVal: text
    })
    this.props.setSearchQueryParameter(text);
  };

  setResultsValue = (data) => {
    this.setState({
      results: data
    })
  };

  render() {
    return (
      <form>
        <input
          className="form-control mr-sm-2 text-white searchbar" type="text" placeholder="Search" aria-label="Search"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleSubmit}
          value={this.state.searchVal}
        />
        <SearchSuggestions results={this.state.results} setSearchValue={this.setSearchValue} setResultsValue={this.setResultsValue} />
      </form>
    )
  }
}

export default Search