import React from 'react'
import PropTypes from 'prop-types'

const FormType = ({ form, wordClasses, className }) => {
  return (
    <div className={className}>
      <i>{form}</i>&nbsp;<span>[ {wordClasses.join(', ')} ]</span>
    </div>
  )
}

FormType.propTypes = {
  form: PropTypes.string,
  wordClasses: PropTypes.array,
}

export default FormType
