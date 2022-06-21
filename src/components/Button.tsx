import { FC, HTMLProps } from 'react'

interface IButton extends HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'fill' | 'outline'
}

const Button: FC<IButton> = ({ children, variant, type, ...props }) => {
  const classname = 
    variant === 'outline'
    ? 'btn-outline'
    : 'btn-fill'

  return (
    <button data-testid='button' type={type} className={`btn ${classname}`} {...props}>
      {children}
    </button>
  )
}

export default Button
