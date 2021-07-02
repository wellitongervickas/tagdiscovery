describe('Books', () => {
  it('renders books page', () => {
    cy.visit('/')

    cy.findByRole('img', {
      name: /Tag discovery/i,
    })
  })
})
