import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Components Header', () => {
  it('renders banner (logo) element', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
