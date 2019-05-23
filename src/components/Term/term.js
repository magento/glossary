import React from 'react'
import styles from './term.module.css'
import Tag from '../Tag'
import { Link, navigate } from 'gatsby'

const Term = ({ data, titleStyle }) => {
  const { frontmatter } = data.markdownRemark
  const { title, wordClasses, relatedTerms, tags } = frontmatter

  return (
    <div className={styles.term}>
      <h2 className={`${styles.termTitle} ${titleStyle}`}>{title}</h2>
      <div className={styles.wordClass}>{wordClasses.join(', ')}</div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {Array.isArray(relatedTerms) && relatedTerms.length > 0 ? (
        <div className={styles.seeAlsoSection}>
          See also:{' '}
          {relatedTerms.map((term, index) => (
            <Link
              className={styles.relatedTermLink}
              to={`/${term}/`}
              key={index}
            >
              {term}
            </Link>
          ))}
        </div>
      ) : null}
      {Array.isArray(tags) && tags.length > 0 ? (
        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <Tag clickAction={() => navigate('/tag/' + tag)} key={index}>
              {tag}
            </Tag>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Term
