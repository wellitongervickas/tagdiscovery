import { FC } from 'react'
import Image from '@/components/ExternalImage'

interface BookImage extends Pick<Books.Book, 'cover' | 'name'> {
  priority?: boolean
}

const BookImage: FC<BookImage> = ({ priority = false, cover, name }) => (
  <>
    <div className="book__image">
      <Image
        src={cover.url}
        alt={name}
        width="350"
        height="480"
        aria-label={name}
        role="img"
        layout="responsive"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkyAAAAG4AakFoPtQAAAAASUVORK5CYII="
        placeholder="blur"
        priority={priority}
      />
    </div>
    <style jsx>
      {`
        .book__image {
          @apply bg-gray-900 bg-opacity-25 rounded-md shadow-xl;
          @apply overflow-hidden;
        }
      `}
    </style>
  </>
)

export default BookImage
