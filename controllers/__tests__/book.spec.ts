import bookController from '@/controllers/book'

const books = [
  { objectId: '0', edition: 'Janeiro de 2016' },
  { objectId: '5', edition: 'Junho de 2017' },
]

jest.mock('@/models', () => ({
  Book: {
    list: () => books,
    findByObjectId: (id: string) =>
      books.find(({ objectId }) => objectId === id),
  },
}))

describe('Controller Book', () => {
  it('returns all books', async () => {
    const books = await bookController.getListOrdenedByDate()
    expect(books).toHaveLength(2)
  })

  it('returns book by objectId', async () => {
    const book = await bookController.getByObjectId('0')
    expect(book).toMatchObject({ objectId: '0', edition: 'Janeiro de 2016' })
  })
})
