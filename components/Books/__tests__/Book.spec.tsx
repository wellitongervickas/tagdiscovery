import { render, screen } from '@testing-library/react'
import Book from '@/components/Books/Book'

const Component = ({ name }: { name: string }) => <div>{name}</div>

jest.mock('@/components/Books/Book/Image', () => () => (
  <Component name="Image" />
))

jest.mock('@/components/Books/Book/Content', () => () => (
  <Component name="Content" />
))

describe('Components Book', () => {
  const book = {}

  beforeEach(() => {
    render(<Book book={book as any} />)
  })

  it('renders book image', () => {
    expect(screen.getByText('Image')).toBeInTheDocument()
  })

  it('renders book content', () => {
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
