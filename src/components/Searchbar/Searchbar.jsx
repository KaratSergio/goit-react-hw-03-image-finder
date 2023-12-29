import React, { useState } from 'react';
import { SearchBox, SearchForm, SearchBtn, SearchInput } from './Searchbar.module';

const Searchbar = ({ onSubmit }) => {
  const [querySearch, setQuerySearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(querySearch.trim());
  };

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  return (
    <SearchBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={querySearch}
          onChange={handleChange}
        />
        <SearchBtn type="submit">
          <span>Search</span>
        </SearchBtn>
      </SearchForm>
    </SearchBox>
  );
};

export default Searchbar;


