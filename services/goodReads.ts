const baseURL = `${process.env.TAG_DISCOVERY_API}/goodreads`

type Data = {
  reviews_widget: string
}

const GoodReadsService = {
  getByIsbnCode,
}

async function getByIsbnCode(isbn?: string): Promise<Data> {
  return fetch(`${baseURL}/${isbn}`).then((res) => res.json())
}

export default GoodReadsService
