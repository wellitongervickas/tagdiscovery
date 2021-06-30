import { render, screen } from '@testing-library/react'
import Ratings from '@/components/Books/Book/Ratings'

jest.mock('@/components/GoodReadsRating', () => () => <div>Good Reads</div>)

describe('Components Book Ratings', () => {
  const book = {
    numRatings: 0,
    totalRatings: 0,
    isbn: '123456',
  }

  beforeEach(() => {
    render(<Ratings {...book} />)
  })

  it('renders every rating item', () => {
    expect(screen.getAllByRole('listitem').length).toBe(2)
  })

  it('renders default rating item', () => {
    expect(screen.getByText('Tag Livros')).toBeInTheDocument()
  })

  it('renders good reads rating item', () => {
    expect(screen.getByText('Good Reads')).toBeInTheDocument()
  })
})
