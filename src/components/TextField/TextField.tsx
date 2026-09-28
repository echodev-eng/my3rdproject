import {
  FieldError,
  Input,
  Label,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import './TextField.css'

export interface TextFieldProps extends Omit<AriaTextFieldProps, 'className'> {
  className?: string
  /** Visible label. If omitted, pass `aria-label` so screen readers can still name the field. */
  label?: string
  placeholder?: string
  /** Overrides the browser's default validation message. */
  errorMessage?: string
}

export function TextField({ className, label, placeholder, errorMessage, ...props }: TextFieldProps) {
  return (
    <AriaTextField {...props} className={['text-field', className].filter(Boolean).join(' ')}>
      {label && <Label className="text-field-label">{label}</Label>}
      <Input className="text-field-input" placeholder={placeholder} />
      <FieldError className="text-field-error">{errorMessage}</FieldError>
    </AriaTextField>
  )
}
