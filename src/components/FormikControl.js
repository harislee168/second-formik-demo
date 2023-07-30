import React from 'react'
import Input from './types/Input'
import Textarea from './types/Textarea'
import Select from './types/Select'
import Radio from './types/Radio'
import Checkbox from './types/Checkbox'
import DatePicker from './types/DatePicker'

function FormikControl(props) {
  const { control,  ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    default: return null
  }
}

export default FormikControl
