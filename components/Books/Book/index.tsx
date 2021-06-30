import { FC } from 'react'
import BookContent from '@/components/Books/Book/Content'
import BookImage from '@/components/Books/Book/Image'

type Book = { book: Books.Book }

const Book: FC<Book> = ({ book }) => (
  <>
    <article className="book" role="article">
      <div className="book__image">
        <BookImage cover={book.cover} name={book.name} priority />
      </div>
      <div className="book__content">
        <BookContent book={book} />
      </div>
    </article>
    <style jsx>
      {`
        .book {
          @apply text-white;
          @apply flex flex-col md:flex-row;
          @apply items-center md:items-start justify-center;

          &__image {
            @apply w-64;
          }

          &__content {
            @apply w-64 md:w-96;
            @apply pt-4 pb-4 md:pt-0 md:pl-4;
          }
        }
      `}
    </style>
  </>
)

export { BookImage }

export default Book
