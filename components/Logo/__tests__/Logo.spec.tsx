import { render, screen } from '@testing-library/react'
import Logo from '@/components/Logo'

describe('Components Logo', () => {
  it('renders image element', () => {
    render(<Logo />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
