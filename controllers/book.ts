import Models from '@/models'
import { orderBooksByDate } from '@/controllers/helpers'

const BookController = {
  getListOrdenedByDate,
  getByObjectId,
}

async function getListOrdenedByDate(): Promise<Books.List> {
  return new Promise((resolve) => {
    const books = orderBooksByDate(Models.Book.list())

    resolve(books)
  })
}

async function getByObjectId(
  objectId: string
): Promise<Books.Book | undefined> {
  return new Promise((resolve) => {
    const book = Models.Book.findByObjectId(objectId)

    resolve(book)
  })
}

export default BookController
