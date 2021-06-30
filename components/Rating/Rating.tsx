import { FC } from 'react'
import { Summary } from '@/components/Details'
import Score from '@/components/Rating/Score'

interface Rating extends Pick<Books.Book, 'numRatings' | 'totalRatings'> {
  title: string
}

const Rating: FC<Rating> = ({ title, numRatings, totalRatings }) => (
  <Summary>
    {{
      title,
      content: <Score numRatings={numRatings} totalRatings={totalRatings} />,
    }}
  </Summary>
)

export default Rating
