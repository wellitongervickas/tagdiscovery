import { render, screen } from '@testing-library/react'
import Score from '@/components/Rating/Score'

describe('Components Rating Score', () => {
  it('display valid score value and total ratings', () => {
    render(<Score totalRatings={3785} numRatings={863} />)

    const ratingScore = screen.getByText('4.4')
    const totalRatings = screen.getByText('de 3785 votos')

    expect(ratingScore).toBeInTheDocument()
    expect(totalRatings).toBeInTheDocument()
  })
})
