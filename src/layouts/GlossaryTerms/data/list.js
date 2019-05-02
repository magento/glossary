import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TagButton from '../../../components/Tag'

const commaSeparated = ({ items }) => {
  if (items === null || items.length === 0) {
    return null
  }
  return items.join(', ')
}

commaSeparated.propTypes = {
  items: PropTypes.array,
}

const buttons = ({ items }) => {
  if (items === null || items.length === 0) {
    return null
  }
  const buttonList = items.map(item => {
    return (
      <TagButton
        key={item}
        clickAction={() => {
          console.log(item)
        }}
      >
        {item}
      </TagButton>
    )
  })

  return buttonList
}

const list = ({
  termTitle,
  children,
  classNames,
  label,
  LabelElement,
  labelProps,
}) => {
  if (children === null) {
    return null
  }
  const className = classnames(classNames)
  return (
    <div className={className}>
      <LabelElement {...labelProps}>{label}</LabelElement>
      {children}
    </div>
  )
}

list.propTypes = {
  children: PropTypes.any,
  classNames: PropTypes.string,
  label: PropTypes.string,
  LabelElement: PropTypes.any,
  labelProps: PropTypes.object,
}

export { commaSeparated, buttons }

export default list
