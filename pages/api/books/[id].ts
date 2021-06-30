import type { NextApiRequest, NextApiResponse } from 'next'
import Controllers from '@/controllers'

const book = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const {
    query: { id },
  } = req

  const objectId = id as string
  const book = await Controllers.Book.getByObjectId(objectId)

  res.status(200).json({ book })
}

export default book
