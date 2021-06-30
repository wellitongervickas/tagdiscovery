import BookService from '@/services/book'

describe('Services book', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('returns all books', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ books: [{ objectId: '1' }, { objectId: '2' }] })
    )

    const books = await BookService.getAll()
    expect(books).toHaveLength(2)
  })

  it('returns a sigle book', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ book: { objectId: '2' } }))

    const book = await BookService.getByObjectId('2')
    expect(book).toMatchObject({
      objectId: '2',
    })
  })
})
