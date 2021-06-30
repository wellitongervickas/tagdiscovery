import { FC } from 'react'
import Image from 'next/image'

const Logo: FC = () => (
  <Image
    key="image"
    src="/assets/images/logo.svg"
    alt="Tag Discovery"
    width="200"
    height="70"
    layout="responsive"
  />
)

export default Logo
