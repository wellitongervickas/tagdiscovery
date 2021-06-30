import type { NextApiRequest, NextApiResponse } from 'next'
import Controllers from '@/controllers'

type Data = {
  books: Books.List
}

const books = async (
  _: NextApiRequest,
  response: NextApiResponse<Data>
): Promise<any> => {
  const books = await Controllers.Book.getListOrdenedByDate()

  // fetch(
  //   'https://www.goodreads.com/book/isbn/9788525063557?format=json&key=KGXBPKnyuYSnSpYDYo7rA'
  // )
  //   .then((res) => res.json())
  //   .then((e) => console.log(e))
  //   .catch((e) => console.log(e))

  response.status(200).json({ books })
}

export default books
