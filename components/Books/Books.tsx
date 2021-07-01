import { FC, useRef } from 'react'
import Link from 'next/link'
import { BookImage } from '@/components/Books/Book'
import { getBookHref } from '@/components/Books/helpers'

type Books = { books: Books.List }
type ListWheelEvent = Pick<WheelEvent, 'deltaY'>

const Books: FC<Books> = ({ books }) => {
  const ref = useRef<HTMLDListElement>(null)
  const scrollValue = 350

  const handleWheel = (event: ListWheelEvent): void => {
    ref.current?.scrollBy(event.deltaY > 0 ? scrollValue : -scrollValue, 0)
  }

  return (
    <>
      <dl ref={ref} className="books" role="list" onWheel={handleWheel}>
        {books.map((book: Books.Book) => (
          <dd key={book.objectId} className="books__item" role="listitem">
            <Link href={getBookHref(book.objectId)} passHref>
              <a>
                <BookImage name={book.name} cover={book.cover} />
              </a>
            </Link>
          </dd>
        ))}
      </dl>
      <style jsx>
        {`
          .books {
            @apply flex overflow-hidden;
            scroll-behavior: smooth;

            &__item {
              @apply flex-none;
              height: 480px;
              width: ${scrollValue}px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Books
