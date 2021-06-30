import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Services from '@/services'
import Head from 'next/head'
import BookComponent from '@/components/Books/Book'
import { getBookHeadTitle } from '@/helpers'

const Book = ({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <>
    <Head>
      <title>{getBookHeadTitle(book)}</title>
    </Head>
    <div className="book__view">
      <BookComponent book={book} />
    </div>
    <style jsx>
      {`
        .book__view {
          @apply h-full;
          @apply overflow-y-auto;
          @apply pt-6 pb-24 lg:pb-0;
          @apply bg-gray-900 bg-opacity-25;
        }
      `}
    </style>
  </>
)

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context
  const book = await Services.Book.getByObjectId(params?.id as string)

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      book,
    },
  }
}

export default Book
