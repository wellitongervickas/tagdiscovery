import { render, screen } from '@testing-library/react'
import About from '@/components/Books/Book/About'

describe('Components Book About', () => {
  const book = {
    pages: 200,
    edition: 'Março de 2015',
    curator: 'Luiz Felipe Pondé',
  }

  beforeEach(() => {
    render(<About {...book} />)
  })

  it('renders edition details', () => {
    const heading = screen.getByText('Edição')
    const content = screen.getByText('Março de 2015')

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders curator details', () => {
    const heading = screen.getByText('Curador')
    const content = screen.getByText('Luiz Felipe Pondé')

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders pages details', () => {
    const heading = screen.getByText('Páginas')
    const content = screen.getByText('200')

    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
