import React, { useState, useRef } from 'react'
import Scrim from '../Scrim'

import searchIcon from './search-icon.svg'

import style from './search.module.css'
import SearchResults from './searchResults'

function getSearchResults(query) {
  if (!query || !window.__LUNR__) return []
  const lunrIndex = window.__LUNR__['en']
  const results = lunrIndex.index.search(query) // you can  customize your search , see https://lunrjs.com/guides/searching.html
  return results.map(({ ref }) => lunrIndex.store[ref])
}

const Search = props => {
  const [value, setValue] = useState('')
  const [searchActive, setSearch] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef(null)
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setValue(event.target.value)
    let results = getSearchResults(event.target.value)
    setSearchResults(results)
    // decide if we need to show results or not
    event.target.value.length && results.length > 0
      ? setShowResults(true)
      : setShowResults(false)
  }

  const handleToggleClick = event => {
    setSearch(true)
    setTimeout(function() {
      inputRef.current.focus()
    }, 0)
  }

  const handleClearClick = event => {
    setValue('')
    setShowResults(false)
    setSearch(false)
  }

  const handleSearchFocus = event => {
    setSearch(true)
  }

  // Warch the for the blur inside the seach box
  // https://stackoverflow.com/questions/11592966/get-the-newly-focussed-element-if-any-from-the-onblur-event/11592974#11592974
  const handleSearchBoxBlur = event => {
    var currentTarget = event.currentTarget

    setTimeout(function() {
      if (!currentTarget.contains(document.activeElement)) {
        setShowResults(false)
        setSearch(false)
      }
    }, 0)
  }

  const className = [
    style.searchContainer,
    searchActive ? style.searchBarActive : null,
    showResults ? style.searchBarSearching : null,
  ].join(' ')

  return (
    <div className={className}>
      <div
        className={style.searchBarWrapper}
        tabIndex="1"
        onBlur={handleSearchBoxBlur}
      >
        <div className={style.searchBar}>
          <input
            ref={inputRef}
            className={style.textInput}
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleSearchFocus}
            placeholder="Search glossary"
          />
          <button
            aria-label="Cancel search"
            className={style.clearSearchButton}
            onClick={handleClearClick}
          >
            &times;
          </button>
        </div>
        <SearchResults active={showResults} results={searchResults} />
      </div>

      <button className={style.searchToggle} onClick={handleToggleClick}>
        <img src={searchIcon} alt="Search" />
      </button>
      <Scrim
        enabled={searchActive}
        additionalClasses={style.scrim}
        clickAction={() => {
          setSearch(false)
        }}
      />
    </div>
  )
}

export default Search
