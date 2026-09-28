import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components'
import './Button.css'

export interface ButtonProps extends Omit<AriaButtonProps, 'className'> {
  className?: string
}

export function Button({ className, ...props }: ButtonProps) {
  return <AriaButton {...props} className={['button', className].filter(Boolean).join(' ')} />
}
