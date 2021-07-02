import { render, screen } from '@testing-library/react'
import Content from '@/components/Books/Book/Content'

const Component = ({ name }: { name: string }) => <div>{name}</div>

jest.mock('@/components/Books/Book/Heading', () => () => (
  <Component name="Heading" />
))

jest.mock('@/components/Books/Book/About', () => () => (
  <Component name="About" />
))

jest.mock('@/components/Books/Book/Ratings', () => () => (
  <Component name="Ratings" />
))

describe('Components Book Content', () => {
  const book = {}

  beforeEach(() => {
    render(<Content book={book as any} />)
  })

  it('renders content heading', () => {
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })

  it('renders content about', () => {
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders content ratings', () => {
    expect(screen.getByText('Ratings')).toBeInTheDocument()
  })
})
