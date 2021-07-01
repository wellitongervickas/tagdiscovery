import orderBooksByDate from '@/controllers/helpers/orderBooksByDate'

describe('Helpers orderBooksByDate', () => {
  it('returns all ordened books', () => {
    const ordenedBooks = orderBooksByDate([
      { objectId: '12', edition: 'Janeiro de 2016' },
      { objectId: '5', edition: 'Junho de 2017' },
      { objectId: '0', edition: 'Janeiro de 2017' },
      { objectId: '1', edition: 'Fevereiro de 2017' },
      { objectId: '2', edition: 'Março de 2017' },
      { objectId: '3', edition: 'Abril de 2017' },
      { objectId: '4', edition: 'Maio de 2017' },
      { objectId: '6', edition: 'Julho de 2017' },
      { objectId: '7', edition: 'Agosto de 2017' },
      { objectId: '8', edition: 'Setembro de 2017' },
      { objectId: '9', edition: 'Outubro de 2017' },
      { objectId: '10', edition: 'Novembro de 2017' },
      { objectId: '11', edition: 'Dezembro de 2017' },
    ] as Books.List)

    expect(ordenedBooks).toMatchObject([
      { objectId: '0', edition: 'Janeiro de 2017' },
      { objectId: '1', edition: 'Fevereiro de 2017' },
      { objectId: '2', edition: 'Março de 2017' },
      { objectId: '3', edition: 'Abril de 2017' },
      { objectId: '4', edition: 'Maio de 2017' },
      { objectId: '5', edition: 'Junho de 2017' },
      { objectId: '6', edition: 'Julho de 2017' },
      { objectId: '7', edition: 'Agosto de 2017' },
      { objectId: '8', edition: 'Setembro de 2017' },
      { objectId: '9', edition: 'Outubro de 2017' },
      { objectId: '10', edition: 'Novembro de 2017' },
      { objectId: '11', edition: 'Dezembro de 2017' },
      { objectId: '12', edition: 'Janeiro de 2016' },
    ])
  })
})
