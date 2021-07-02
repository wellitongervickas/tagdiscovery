import { render, screen } from '@testing-library/react'
import Summary from '@/components/Details/Summary'

describe('Components Details Summary', () => {
  beforeEach(() => {
    render(
      <Summary>{{ title: 'Some title', content: 'some content' }}</Summary>
    )
  })

  it('displays summary title', () => {
    const title = screen.getByText('Some title')
    expect(title).toBeInTheDocument()
  })

  it('displays summary content', () => {
    const content = screen.getByText('some content')
    expect(content).toBeInTheDocument()
  })
})
