import { render, screen } from '@testing-library/react'
import Rating from '@/components/Rating'

describe('Components Rating', () => {
  it('displays rating title', () => {
    render(<Rating title="tag books" totalRatings={3785} numRatings={863} />)

    const title = screen.getByText('tag books')
    expect(title).toBeInTheDocument()
  })
})
