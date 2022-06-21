import { render, screen } from '@testing-library/react'
import { TCard } from '../model'
import Card from './Card'

describe('Card component test', () => {
  beforeEach(() => {
    const mockData: TCard = {
      id: 1,
      image: {
        medium: 'https://test.org/test.png',
        original: 'https://test.org/test.original.png',
      },
      summary: '<p>summary here</p>',
      name: 'Batman',
    }

    render(<Card data={mockData} />)
  })

  it('should have image as https://test.org/test.png', () => {
    const titleDoms: HTMLCollectionOf<HTMLHeadingElement> = screen
      .getByTestId('card')
      .getElementsByTagName('h4')

    expect(titleDoms.length).toBeCloseTo(1)
    expect(titleDoms[0].innerHTML).toBe('Batman')
  })

  it('should have name and summary', () => {
    expect(screen.getByTestId('card')).toContainHTML('summary here')
    expect(screen.getByTestId('card')).toContainHTML('Batman')
  })
})
