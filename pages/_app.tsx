import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

const _App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Tag Discovery</title>
      <meta name="description" content="Tag Discovery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="app">
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
    </section>
    <style jsx global>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

        html,
        body,
        #__next {
          @apply h-screen;

          body {
            @apply font-roboto;
            @apply bg-fixed	bg-gradient-to-tr from-purple-900 to-yellow-900;
            @apply text-lg;
            @apply overflow-hidden;
          }

          .app {
            @apply flex flex-col;

            &,
            main {
              @apply h-full;
            }

            main {
              @apply flex-1;
            }
          }
        }
      `}
    </style>
  </>
)

export default _App
