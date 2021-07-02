import type { NextApiRequest, NextApiResponse } from 'next'

const goodReads = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req

  fetch(
    `https://www.goodreads.com/book/isbn/${id}?format=json&key=${process.env.GOODREADS_API_KEY}`
  )
    .then((res) => res.json())
    .then(res.status(200).json)
    .catch(() => res.status(404).json({ error: 'not_found' }))
}

export default goodReads
