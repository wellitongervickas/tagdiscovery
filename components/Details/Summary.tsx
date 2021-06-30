import { FC, ReactNode } from 'react'
interface Summary {
  children: {
    title: ReactNode
    content: ReactNode
  }
}

const Summary: FC<Summary> = ({ children: { title, content } }) => (
  <>
    <h3>{title}</h3>
    <p>{content}</p>
    <style jsx>
      {`
        h3 {
          @apply font-bold;
        }

        p {
          @apply text-gray-300 mb-4;
        }
      `}
    </style>
  </>
)

export default Summary
