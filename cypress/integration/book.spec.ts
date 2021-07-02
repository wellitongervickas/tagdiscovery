describe('Book', () => {
  it('renders book page', () => {
    cy.visit('/1WHexRrC5v')

    cy.findByRole('heading', {
      name: /O Xará/i,
    })
  })

  it('renders good reads reviews', () => {
    cy.intercept('GET', /\/api/i, {
      statusCode: 200,
      delay: 500,
      body: 'some reviews',
    }).as('externalApi')

    cy.wait('@externalApi')

    cy.get('iframe')
  })
})
