import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Checkbox(props) {
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
                <React.Fragment key={opt.value}>
                  <input type='checkbox' id={opt.value} {...field} value={opt.value} checked={field.value.includes(opt.value)} />
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

export default Checkbox
