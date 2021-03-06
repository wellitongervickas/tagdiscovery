import { render, screen, fireEvent } from '@testing-library/react'
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

  beforeEach(() => {
    render(<Books books={books} />)
  })

  it('renders every book from list', () => {
    const list = screen.getAllByRole('listitem')
    expect(list.length).toBe(2)
  })

  it('renders books links', () => {
    const [book_0, book_1] = screen.getAllByRole('link')

    expect(book_0.getAttribute('href')).toBe(`/${books[0].objectId}`)
    expect(book_1.getAttribute('href')).toBe(`/${books[1].objectId}`)
  })

  it('call scrollBy once on mouse wheel up event', async () => {
    const list = await screen.findByRole('list')
    list.scrollBy = jest.fn()
    fireEvent.wheel(list)

    expect(list.scrollBy).toBeCalledWith(-350, 0)
  })

  it('call scrollBy once on mouse wheel down event', async () => {
    const list = await screen.findByRole('list')
    list.scrollBy = jest.fn()
    fireEvent.wheel(list, { deltaY: 200 })

    expect(list.scrollBy).toBeCalledWith(350, 0)
  })

  describe('mobile only', () => {
    it('call scrollBy once on mouse touch left to right event', async () => {
      const list = await screen.findByRole('list')
      list.scrollBy = jest.fn()

      fireEvent.touchStart(list, { changedTouches: [{ clientX: 300 }] })
      fireEvent.touchMove(list, { changedTouches: [{ clientX: 0 }] })
      fireEvent.touchEnd(list)

      expect(list.scrollBy).toBeCalledWith(350, 0)
    })

    it('call scrollBy once on mouse touch right to left event', async () => {
      const list = await screen.findByRole('list')
      list.scrollBy = jest.fn()

      fireEvent.touchStart(list, { changedTouches: [{ clientX: 0 }] })
      fireEvent.touchMove(list, { changedTouches: [{ clientX: 300 }] })
      fireEvent.touchEnd(list)

      expect(list.scrollBy).toBeCalledWith(-350, 0)
    })
  })
})
