import GoodReadsService from '@/services/goodReads'

describe('Services good reads', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('returns a reviews widget', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        reviews_widget: 'some_html_to_inject_in_react_component',
      })
    )

    const book = await GoodReadsService.getByIsbnCode('some_isbn_code')
    expect(book).toMatchObject({
      reviews_widget: 'some_html_to_inject_in_react_component',
    })
  })
})
