import React from 'react'
import style from './navigation.module.css'
import { Link } from 'gatsby'

const Group = ({ label, termsList, currentPageUrl }) => {
  termsList.sort(sortFunction)

  let links = termsList.map(node => {
    const currentPath = currentPageUrl
    const isCurrentPage = node.term.fields.slug === currentPath

    const className = isCurrentPage
      ? style.selectedNavigationItem
      : style.navigationItem

    return (
      <Link
        key={node.term.id}
        className={className}
        to={node.term.fields.slug}
        ref={c => {
          if (c && isCurrentPage) {
            c.scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center',
            })
          }
        }}
      >
        {node.term.frontmatter.title}
      </Link>
    )
  })

  return (
    <>
      <h3 className={style.groupLabel}>{label.toUpperCase()}</h3>
      {links}
    </>
  )
}

function sortFunction(a, b) {
  return a.term.frontmatter.title
    .toLowerCase()
    .localeCompare(b.term.frontmatter.title.toLowerCase())
}

export default Group
