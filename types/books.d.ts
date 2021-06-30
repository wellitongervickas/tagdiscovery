declare namespace Books {
  type List = Books.Book[]
  interface Book {
    objectId: string
    pages: number
    author: string
    name: string
    active?: boolean
    isbn: string
    curator: string
    createdAt: string
    updatedAt: string
    cover: {
      __type: string
      name: string
      url: string
    }
    edition: string
    blocked: boolean
    numRatings: number
    totalRatings: number
  }
}
