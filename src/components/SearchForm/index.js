import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

import styled from 'styled-components';
import SearchIcon from '../../assets/img/svgs/search-icon.svg';

const people = [
  {
    first: 'Charlie',
    last: 'Brown',
    twitter: 'dancounsell',
  },
  {
    first: 'Charlotte',
    last: 'White',
    twitter: 'mtnmissy',
  },
  {
    first: 'Chloe',
    last: 'Jones',
    twitter: 'ladylexy',
  },
  {
    first: 'Cooper',
    last: 'King',
    twitter: 'steveodom',
  },
];

const SearchFormWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.07);
  height: 40px;
  padding: 0px 8px 0px 16px;
  border-radius: 24px;
  transition: all 0.12s ease-in-out 0s;
  color: rgba(255, 255, 255, 0.4);

  .react-autosuggest__container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .input-container {
    width: 100%;
    display: flex;

    .icon {
      margin-right: 7px;
      margin-top: 2px;
    }
  }

  input {
    flex: 1;
    font-size: 15px;
    font-weight: bold;
    background: transparent;
    border-width: 0px;
    padding: 0px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    outline: none;
  }
`;

const SearchForm = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('\\b' + escapedValue, 'i');

    return people.filter((person) => regex.test(getSuggestionValue(person)));
  };

  const getSuggestionValue = (suggestion) => {
    return `${suggestion.first} ${suggestion.last}`;
  };

  const renderSuggestion = (suggestion, { query }) => {
    const suggestionText = `${suggestion.first} ${suggestion.last}`;
    console.log(suggestionText, query);
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span className={'suggestion-content ' + suggestion.twitter}>
        <span className="name">
          {parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </span>
      </span>
    );
  };

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderInputComponent = (inputProps) => (
    <div className="input-container">
      <img className="icon" src={SearchIcon} />
      <input {...inputProps} />
    </div>
  );

  const inputProps = {
    placeholder: 'Search Rarible',
    value,
    onChange: onChange,
  };

  return (
    <SearchFormWrapper>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
      />
    </SearchFormWrapper>
  );
};

export default SearchForm;
