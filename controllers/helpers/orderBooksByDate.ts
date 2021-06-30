import orderBy from '@/controllers/helpers/orderBy'

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const orderBooksByDate = (books: Books.List): Books.List => {
  const ordenedListOfBooks = books.sort((firstBook, secondBook) => {
    const [firstMonth, , firstYear] = firstBook.edition.split(' ')
    const [secondMonth, , secondYear] = secondBook.edition.split(' ')

    const yearOrder = orderBy.asc(firstYear, secondYear)
    const yearsAreEquals = yearOrder === 0

    if (yearsAreEquals) {
      const firstMonthOrder = months.indexOf(firstMonth)
      const secondMonthOrder = months.indexOf(secondMonth)

      return orderBy.dsc(firstMonthOrder, secondMonthOrder)
    }

    return yearOrder
  })

  return ordenedListOfBooks
}

export default orderBooksByDate
