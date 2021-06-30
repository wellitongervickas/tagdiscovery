/* eslint-disable import/no-anonymous-default-export */
describe('Books', () => {
  it('renders books page', () => {
    cy.visit('/')

    cy.findByRole('img', {
      name: /Tag discovery/i,
    })
  })
})

export default {}
