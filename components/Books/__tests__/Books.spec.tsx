import { render, screen } from '@testing-library/react'
import Books from '@/components/Books'

describe('Components Books List', () => {
  const books = [
    {
      objectId: '1WHexRrC5v',
      cover: {
        name: '8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
        url: 'https://static2.taglivros.com/8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
      },
    },
    {
      objectId: '4MQrahe9Fk',
      cover: {
        name: 'e40b34d22e66980bd2125f5250be5e39_695243.jpg',
        url: 'https://static2.taglivros.com/e40b34d22e66980bd2125f5250be5e39_695243.jpg',
      },
    },
  ] as Books.List

  it('renders every book from list', () => {
    render(<Books books={books} />)

    const list = screen.getAllByRole('listitem')
    expect(list.length).toBe(2)
  })

  it('renders books links', () => {
    render(<Books books={books} />)

    const [book_0, book_1] = screen.getAllByRole('link')

    expect(book_0.getAttribute('href')).toBe(`/${books[0].objectId}`)
    expect(book_1.getAttribute('href')).toBe(`/${books[1].objectId}`)
  })
})
