import BookHeading from '@/components/Books/Book/Heading'
import BookAbout from '@/components/Books/Book/About'
import BookRatings from '@/components/Books/Book/Ratings'
import { FC } from 'react'

type BookContent = { book: Books.Book }

const BookContent: FC<BookContent> = ({ book }) => {
  const {
    name,
    author,
    edition,
    curator,
    pages,
    numRatings,
    totalRatings,
    isbn,
  } = book

  return (
    <>
      <BookHeading name={name} author={author} />
      <BookAbout edition={edition} curator={curator} pages={pages} />
      <BookRatings
        numRatings={numRatings}
        totalRatings={totalRatings}
        isbn={isbn}
      />
    </>
  )
}

export default BookContent
