import bookModel from '@/models/book'

jest.mock('@/models/book/results', () => [
  {
    objectId: '1',
  },
  {
    objectId: '2',
  },
])

describe('Models book', () => {
  it('returns all books', () => {
    const books = bookModel.list()
    expect(books).toHaveLength(2)
  })

  it('returns book by objectId', () => {
    const book = bookModel.findByObjectId('2')
    expect(book).toMatchObject({
      objectId: '2',
    })
  })
})
