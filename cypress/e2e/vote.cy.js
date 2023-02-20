describe('Vote', () => {
  it('successfully votes and vote total is increased by 1', () => {
    // Arrange
    cy.setupTestForVoting()
    cy.contains('View more').click()

    let initialVoteValue;

    // Act & assert
    cy.get('h4 > strong')
      .invoke('text')
      .then(textValue => {
        // Grab initial vote total
        initialVoteValue = parseInt(textValue);
        cy.contains('button', 'Vote').click()
        cy.contains('Thank you for your vote!')
        cy.get('h4 > strong')
          .then(() => {
            // Grab the text value again after clicking and assert that it has increased by 1
            cy.get('h4 > strong')
              .invoke('text')
              .then(newVoteValue => {
                const expectedValue = initialVoteValue + 1;
                expect(parseInt(newVoteValue)).to.equal(expectedValue);
              });
          });
    });

    // Clean up
    cy.logout()
  })

  it('successfully votes and writes a comment', () => {
    // Arrange
    cy.setupTestForVoting()

    // Act & assert
    cy.contains('View more').click()
    cy.get('h4 > strong')
      .invoke('text')
      .then((text) => {
        const comment = text
        cy.get('textarea[id=comment]').type(text)
        cy.contains('button', 'Vote').click()
        cy.get('table tbody tr').first().within(() => {
          cy.get('td').eq(2).should('have.text', comment)
        })
    })

    // Clean up
    cy.logout()
  })
  
  it('does not allow to vote if user is not logged in', () => {
    // Arrange & act
    cy.visit(Cypress.env('overallRatingUrl'))

    // Assert
    cy.contains('View more')
  })
})