import { render, screen } from '@testing-library/react'
import Heading from '@/components/Books/Book/Heading'

describe('Components Book Heading', () => {
  const book = {
    name: 'Book name',
    author: 'Book author',
  }

  beforeEach(() => {
    render(<Heading {...book} />)
  })

  it('renders book name', () => {
    const heading = screen.getByText('Book name')
    expect(heading).toBeInTheDocument()
  })

  it('renders book author', () => {
    const heading = screen.getByText('Book author')
    expect(heading).toBeInTheDocument()
  })
})
