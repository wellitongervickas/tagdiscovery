import type { NextApiRequest, NextApiResponse } from 'next'

const goodReads = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const {
    query: { id },
  } = req

  req.headers['Access-Control-Allow-Origi'] = '*'
  req.headers['Access-Control-Allow-Headers'] =
    'Origin, X-Requested-With, Content-Type, Accept'

  await fetch(
    `https://www.goodreads.com/book/isbn/${id}?format=json&key=${process.env.GOODREADS_API_KEY}`
  )
    .then((res) => res.json())
    .then(res.status(200).json)
    .catch(() => res.status(404).json({ error: 'not_found' }))
}

export default goodReads
