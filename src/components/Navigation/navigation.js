import React from 'react'
import style from './navigation.module.css'
import Group from './group'

const navigation = ({ termsList, currentPageUrl }) => {
  if (termsList === undefined) return null

  let termGroups = {}

  termsList.forEach(node => {
    let title = node.term.frontmatter.title.toLowerCase()
    if (termGroups[title[0]] === undefined) {
      termGroups[title[0]] = []
    }
    termGroups[title[0]].push(node)
  })

  let groups = Object.keys(termGroups).map(key => {
    return (
      <Group key={key} label={key.toUpperCase()} termsList={termGroups[key]} currentPageUrl={currentPageUrl} />
    )
  })

  return <div className={style.navigation}>{groups}</div>
}

export default navigation
