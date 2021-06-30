import { FC } from 'react'
import { Summary } from '@/components/Details'

type Details = 'edition' | 'pages' | 'curator'
type BookAbout = Pick<Books.Book, Details>

const BookAbout: FC<BookAbout> = ({ edition, curator, pages }) => {
  const details = [
    ['Edição', edition],
    ['Curador', curator],
    ['Páginas', pages],
  ]

  return (
    <dl role="list">
      {details.map(([title, content], index) => (
        <dd key={index} role="listitem">
          <Summary>
            {{
              title,
              content,
            }}
          </Summary>
        </dd>
      ))}
    </dl>
  )
}

export default BookAbout
