import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Components Header', () => {
  it('renders banner element', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
