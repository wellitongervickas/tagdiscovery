import { FC } from 'react'

type BookReading = Pick<Books.Book, 'name' | 'author'>

const BookHeading: FC<BookReading> = ({ name, author }) => (
  <>
    <div className="book__heading">
      <h1>{name}</h1>
      <h2>{author}</h2>
    </div>
    <style jsx>
      {`
        .book__heading {
          @apply border-b border-yellow-600;
          @apply mb-6 pb-6;

          & h1 {
            @apply text-4xl font-bold;
          }

          & h2 {
            @apply italic text-gray-300 text-sm;
          }
        }
      `}
    </style>
  </>
)

export default BookHeading
