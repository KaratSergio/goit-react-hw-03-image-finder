import React, { Component } from 'react';
// import { Searchbar } from './Searchbar.module';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}


