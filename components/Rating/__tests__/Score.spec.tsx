import { render, screen } from '@testing-library/react'
import Score from '@/components/Rating/Score'

describe('Components Rating Score', () => {
  it('displays valid score value', () => {
    render(<Score totalRatings={3785} numRatings={863} />)

    const ratingScore = screen.getByText('4.4')
    expect(ratingScore).toBeInTheDocument()
  })

  it('displays valid score total ratings', () => {
    render(<Score totalRatings={3785} numRatings={863} />)

    const totalRatings = screen.getByText('de 3785 votos')
    expect(totalRatings).toBeInTheDocument()
  })
})
