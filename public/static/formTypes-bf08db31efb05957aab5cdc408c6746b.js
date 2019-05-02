import React from 'react'
import PropTypes from 'prop-types'
import FormType from './formType'

const FormTypes = ({ formTypes, className }) => {
  if (formTypes == null) {
    return null
  }
  let forms = formTypes.map(formType => {
    const { form, wordClasses } = formType
    return (
      <FormType
        key={form}
        form={form}
        className={className}
        wordClasses={wordClasses}
      />
    )
  })

  return <>{forms}</>
}

FormTypes.propTypes = {
  formTypes: PropTypes.array,
}

export default FormTypes
