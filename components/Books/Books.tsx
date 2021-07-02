import { FC } from 'react'
import Link from 'next/link'
import { BookImage } from '@/components/Books/Book'
import { getBookHref } from '@/components/Books/helpers'
import useSwipe from '@/components/Books/hooks/useSwipe'

type Books = { books: Books.List }

const Books: FC<Books> = ({ books }) => {
  const swipeRange = 350
  const {
    ref: listRefElement,
    handleOnWheel,
    handleOnTouchStart,
    handleOnTouchMove,
    handleTouchEnd,
  } = useSwipe({ swipeRange })

  return (
    <>
      <dl
        ref={listRefElement}
        className="books"
        role="list"
        onWheel={handleOnWheel}
        onTouchStart={handleOnTouchStart}
        onTouchMove={handleOnTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            scroll-snap-align: start;
            overflow-scrolling: touch;

            &__item {
              @apply flex-none;
              height: 480px;
              width: ${swipeRange};
            }
          }
        `}
      </style>
    </>
  )
}

export default Books
