import { FC, useCallback, useEffect, useState } from 'react'
import { Summary } from '@/components/Details'
import Services from '@/services'

const GoodReadsRating: FC<Pick<Books.Book, 'isbn'>> = ({ isbn }) => {
  const fallbackMessage = 'Nenhuma avaliação encontrada!'
  const [reviewsWidget, setReviewsWidget] = useState(
    'Buscando avaliações no goodreads.com'
  )

  const handleRequestRating = useCallback(
    () =>
      Services.GoodReads.getByIsbnCode(isbn)
        .then(({ reviews_widget }) => {
          setReviewsWidget(reviews_widget || fallbackMessage)
        })
        .catch(() => {
          setReviewsWidget(fallbackMessage)
        }),
    [isbn, setReviewsWidget]
  )

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
          .goodreads__rating {
            @apply min-h-full block;
            @apply bg-gray-900 bg-opacity-25;
            @apply rounded-lg p-4 py-0 mt-2 mb-16;
          }

          #goodreads-widget {
            &,
            iframe {
              @apply w-full !important;
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
