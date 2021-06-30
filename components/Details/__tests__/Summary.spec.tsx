import { render, screen } from '@testing-library/react'
import Summary from '@/components/Details/Summary'

describe('Components Details Summary', () => {
  it('displays summary title and content', () => {
    render(
      <Summary>{{ title: 'Some title', content: 'some content' }}</Summary>
    )

    const title = screen.getByText('Some title')
    const content = screen.getByText('some content')

    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
