import { FC } from 'react'
import Link from 'next/link'
import { BookImage } from '@/components/Books/Book'
import { getBookHref } from '@/components/Books/helpers'

type Books = { books: Books.List }

const Books: FC<Books> = ({ books }) => (
  <>
    <dl className="books" role="list">
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
          @apply flex flex-wrap justify-around;

          &__item {
            @apply w-60 p-4 pt-0 m-0 hover:opacity-50;
            @apply transition delay-150 duration-300 ease-in-out;
          }
        }
      `}
    </style>
  </>
)

export default Books
