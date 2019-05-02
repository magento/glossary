import React from 'react'

import { Link } from 'gatsby'

import style from './searchResults.module.css'

const SearchResults = props => {
  const { active, results, relatedResults = [] } = props

  if (results === undefined) return null

  const className = [style.searchResults, active ? style.active : null].join(
    ' '
  )

  const listItems = results.map(child => {
    return (
      <li key={child.url} className={style.result}>
        <Link className={style.resultLink} to={child.url}>
          {child.title}
        </Link>
      </li>
    )
  })

  const relatedItems = relatedResults.map(child => {
    return (
      <li key={child.url} className={style.relatedResult}>
        <Link className={style.resultLink} to={child.url}>
          {child.title}
        </Link>
      </li>
    )
  })

  return (
    <div className={className}>
      <ul className={style.results}>{listItems}</ul>

      {relatedItems.length > 0 ? (
        <>
          <h3 className={style.searchResultsSubtitle}>Related terms</h3>
          <ul className={style.relatedResults}>{relatedItems}</ul>
        </>
      ) : null}
    </div>
  )
}

export default SearchResults
