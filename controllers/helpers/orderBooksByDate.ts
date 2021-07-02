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
    const [firstMonth, firstYear] = getDateFromEdition(firstBook.edition)
    const [secondMonth, secondYear] = getDateFromEdition(secondBook.edition)

    const years = orderBy.asc(firstYear, secondYear)
    const yearsAreEquals = years === 0

    if (yearsAreEquals) {
      const firstMonthOrder = getMonthPosition(firstMonth)
      const secondMonthOrder = getMonthPosition(secondMonth)

      return orderBy.dsc(firstMonthOrder, secondMonthOrder)
    }

    return years
  })

  return ordenedListOfBooks
}

const getDateFromEdition = (edition: string) => {
  const [month, , year] = edition.split(' ')
  return [month, year]
}

const getMonthPosition = (month: string) => months.indexOf(month)

export default orderBooksByDate
