import React from 'react'
import NavigationItem from './navigationItem'
import style from './navigation.module.css'
import encodeTermTitle from './encodeTermTitle'

const navigation = ({ termsList }) => {
  if (termsList === undefined) return null

  termsList.sort(function(a, b) {
    return a.term.name.toLowerCase().localeCompare(b.term.name.toLowerCase())
  })

  let glossaryTerms = termsList.map(node => {
    return (
      <NavigationItem
        classes={style.navigationItem}
        key={node.term.name}
        anchorName={encodeTermTitle(node.term.name)}
        title={node.term.name}
      />
    )
  })

  return (
    <div className={style.navigation}>
      <div className={style.navigationTitle}>Glossary Terms</div>
      {glossaryTerms}
    </div>
  )
}

export default navigation
