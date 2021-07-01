import { FC } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const Header: FC = () => (
  <>
    <header role="banner" className="header">
      <Link href="/">
        <a className="header__logo">
          <Logo />
        </a>
      </Link>
    </header>
    <style jsx>{`
      .header {
        @apply container h-20;
        @apply m-auto px-4;
        @apply flex items-center justify-center;

        &__logo {
          @apply w-48 opacity-80;
        }
      }
    `}</style>
  </>
)

export default Header
