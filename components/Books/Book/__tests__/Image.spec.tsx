/* eslint-disable jsx-a11y/alt-text */
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Image from '../Image'

describe('Components Book Image', () => {
  it('renders book image with priority', () => {
    const imagePath = '/assets/images/logo.svg'

    render(
      <Image
        cover={{ __type: '', name: 'logo', url: imagePath }}
        name="name"
        priority
      />
    )

    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toBe('/assets/images/logo.svg')
  })

  it('renders book image without priority', () => {
    const imagePath = '/assets/images/logo.svg'

    render(
      <Image cover={{ __type: '', name: 'logo', url: imagePath }} name="name" />
    )

    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toBe(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
  })
})
