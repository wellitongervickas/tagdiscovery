const getBookHeadTitle = ({
  name,
  author,
}: Pick<Books.Book, 'name' | 'author'>) => `${name} by ${author}`

export default getBookHeadTitle
