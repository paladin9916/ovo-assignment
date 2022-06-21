import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button component test', () => {
  it('should be rendered correctly', () => {
    render(<Button>Test Button</Button>)

    expect(screen.getByTestId('button').innerHTML).toBe('Test Button')
  })
})
