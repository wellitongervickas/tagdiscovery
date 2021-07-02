import type { NextApiRequest, NextApiResponse } from 'next'
import Controllers from '@/controllers'

type Data = {
  books: Books.List
}

const books = async (_: NextApiRequest, response: NextApiResponse<Data>) => {
  const books = await Controllers.Book.getListOrdenedByDate()
  response.status(200).json({ books })
}

export default books
