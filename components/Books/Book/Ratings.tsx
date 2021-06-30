import { FC } from 'react'
import GoodReadsRating from '@/components/GoodReadsRating'
import Rating from '@/components/Rating'

type ComponentProps = 'numRatings' | 'totalRatings' | 'isbn'
type BookRatings = Pick<Books.Book, ComponentProps>

const BookRatings: FC<BookRatings> = ({ numRatings, totalRatings, isbn }) => (
  <>
    <dl role="list">
      <dd role="listitem">
        <Rating
          title="Tag Livros"
          numRatings={numRatings}
          totalRatings={totalRatings}
        />
      </dd>
      <dd role="listitem">
        <GoodReadsRating isbn={isbn} />
      </dd>
    </dl>
  </>
)

export default BookRatings
