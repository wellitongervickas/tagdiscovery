import { InferGetServerSidePropsType } from 'next'
import Services from '@/services'
import Head from 'next/head'
import Books from '@/components/Books'

const Home = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <>
    <Head>
      <title>Tag Discovery - Books</title>
    </Head>
    <div className="books_view">
      <Books books={books} />
    </div>
    <style jsx>
      {`
        .books_view {
          @apply h-full;
          @apply overflow-hidden;
          @apply pt-6 pb-24;
        }
      `}
    </style>
  </>
)

export const getServerSideProps = async () => ({
  props: {
    books: await Services.Book.getAll(),
  },
})

export default Home
