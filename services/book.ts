const baseURL = `${process.env.TAG_DISCOVERY_API}/books`

const BookService = {
  getAll,
  getByObjectId,
}

async function getAll(): Promise<Books.List> {
  const data = await fetch(baseURL).then((response) => response.json())

  return data.books
}

async function getByObjectId(objectId?: string): Promise<Books.Book> {
  const data = await fetch(`${baseURL}/${objectId}`).then((response) =>
    response.json()
  )

  return data.book
}

export default BookService
