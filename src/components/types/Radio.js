import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Radio(props) {
  const {name, label, options, ...rest} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {
          ({field}) => {
            return (
              options.map((opt) => {
                return (
                  <React.Fragment key={opt.key}>
                    <input type='radio' id={opt.value} {...field} value={opt.value} checked={field.value === opt.value} />
                    <label htmlFor={opt.value}>{opt.key}</label>
                  </React.Fragment>
                )
              })
            )
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Radio
