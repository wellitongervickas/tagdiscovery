import { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { loadExternalSrcImage } from '@/components/ExternalImage/helpers'

const Image: FC<ImageProps> = (props: any) => (
  <NextImage loader={loadExternalSrcImage} {...props} />
)

export default Image
