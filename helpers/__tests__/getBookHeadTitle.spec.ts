import getBookHeadTitle from '@/helpers/getBookHeadTitle'

describe('Helpers getBookHeadTitle', () => {
  it('returns a valid title with: book name by author', () => {
    const title = getBookHeadTitle({
      name: 'Book name',
      author: 'Welliton gervickas',
    })

    expect(title).toBe('Book name by Welliton gervickas')
  })
})
