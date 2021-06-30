import { FC, useCallback, useEffect, useState } from 'react'
import { Summary } from '@/components/Details'
import Services from '@/services'

const GoodReadsRating: FC<Pick<Books.Book, 'isbn'>> = ({ isbn }) => {
  const [reviewsWidget, setReviewsWidget] = useState('')
  const handleRequestRating = useCallback(
    async () =>
      await Services.GoodReads.getByIsbnCode(isbn)
        .then(({ reviews_widget }) => {
          setReviewsWidget(reviews_widget || 'Nenhuma avaliação encontrada!')
        })
        .catch(() => setReviewsWidget('Nenhuma avaliação encontrada!')),
    [setReviewsWidget, isbn]
  )

  useEffect(() => {
    setReviewsWidget('Buscando avaliações no goodreads.com')
  }, [])

  useEffect(() => {
    handleRequestRating()
  }, [handleRequestRating])

  return (
    <>
      <Summary>
        {{
          title: 'Good Reads',
          content: (
            <span
              className="goodreads__rating"
              dangerouslySetInnerHTML={{ __html: reviewsWidget }}
            />
          ),
        }}
      </Summary>
      <style jsx global>
        {`
          #goodreads-widget {
            &,
            iframe {
              @apply w-full !important;
              @apply rounded-lg p-4;
            }

            iframe {
              @apply bg-gray-900 bg-opacity-25;
            }

            h1,
            #gr_footer {
              @apply border-none !important;
            }
            a {
              @apply text-white !important;
            }
          }
        `}
      </style>
    </>
  )
}

export default GoodReadsRating
