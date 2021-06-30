import getRatingScore from '@/components/Rating/helpers/getRatingScore'

describe('Helpers getRatingScore', () => {
  it('returns rating score from num and total ratings', () => {
    const score = getRatingScore({ totalRatings: 250, numRatings: 50 })
    expect(score).toBe('5.0')
  })
})
