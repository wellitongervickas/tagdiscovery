import { render, screen } from '@testing-library/react'
import Summary from '@/components/Details/Summary'

describe('Components Details Summary', () => {
  it('displays summary title', () => {
    render(
      <Summary>{{ title: 'Some title', content: 'some content' }}</Summary>
    )

    const title = screen.getByText('Some title')
    expect(title).toBeInTheDocument()
  })

  it('displays summary content', () => {
    render(
      <Summary>{{ title: 'Some title', content: 'some content' }}</Summary>
    )

    const content = screen.getByText('some content')
    expect(content).toBeInTheDocument()
  })
})
