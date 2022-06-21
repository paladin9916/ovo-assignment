import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input component test', () => {
  it('should be rendered correctly', () => {
    render(<Input />)

    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
