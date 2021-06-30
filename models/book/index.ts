import books from '@/models/book/results'

const BookModel = {
  list,
  findByObjectId,
}

function list(): Books.List {
  return books
}

function findByObjectId(objectId: string): Books.Book | undefined {
  return books.find((book) => book.objectId === objectId)
}

export default BookModel
