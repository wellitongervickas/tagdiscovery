import { FC } from 'react'
import { getRatingScore } from '@/components/Rating/helpers'

type Score = Pick<Books.Book, 'numRatings' | 'totalRatings'>

const Score: FC<Score> = ({ numRatings, totalRatings }) => {
  const ratingScoreValue = getRatingScore({ numRatings, totalRatings })

  return (
    <>
      <span className="rating__score">{`${ratingScoreValue} `}</span>
      <span>{`de ${totalRatings} votos`}</span>
      <style jsx>
        {`
          .rating__score {
            @apply text-yellow-300 font-bold;
          }
        `}
      </style>
    </>
  )
}

export default Score
