import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Image from '../Image'

describe('Components Image', () => {
  it('renders default src image with priority', () => {
    render(
      <Image
        src="/assets/images/logo.svg"
        alt="some alt"
        width={0}
        height={0}
        priority
      />
    )

    const image = screen.getByRole('img')
    expect(image.outerHTML).toContain('/assets/images/logo.svg')
  })

  it('renders encoded src image without priority', () => {
    render(
      <Image
        src="/assets/images/logo.svg"
        alt="some alt"
        width={0}
        height={0}
      />
    )

    const image = screen.getByRole('img')
    expect(image.outerHTML).toContain(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
  })
})
