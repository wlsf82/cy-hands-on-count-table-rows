it('counts the number of table rows in a table', () => {
  cy.visit('./index.html')

  cy.get('tbody tr').should('have.length', 6)
})
