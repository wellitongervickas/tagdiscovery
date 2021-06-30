import { render, screen } from '@testing-library/react'
import GoodReadsRating from '@/components/GoodReadsRating/GoodReadsRating'

describe('Components Book Ratings', () => {
  const book = {
    isbn: '123456',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('renders good reads title', async () => {
    render(<GoodReadsRating {...book} />)

    expect(await screen.findByText('Good Reads')).toBeInTheDocument()
  })

  it('renders good reads reviews', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ reviews_widget: 'iframe content' })
    )

    render(<GoodReadsRating {...book} />)

    expect(await screen.findByText('iframe content')).toBeInTheDocument()
  })
})
