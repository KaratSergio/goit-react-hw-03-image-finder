import React, { Component } from 'react';
import { SearchBox, SearchForm, SearchBtn, SearchInput } from './Searchbar.module';

export default class Searchbar extends Component {
  state = {
    querySearch: '',
  };

  handleChange = (e) => {
    this.setState({ querySearch: e.target.value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.querySearch);
  };

  render() {
    return (
      <SearchBox className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchBtn type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchBtn>
          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBox>
    );
  }
}


