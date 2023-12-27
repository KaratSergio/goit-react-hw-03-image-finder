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
      <SearchBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">
            <span>Search</span>
          </SearchBtn>
        </SearchForm>
      </SearchBox>
    );
  }
}


