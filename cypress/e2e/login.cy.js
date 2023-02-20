describe('Login', () => {
  it('successfully logs in with valid credentials', () => {
    // Arrange & act
    cy.login()

    // Assert
    const greeting = 'Hi, ' + Cypress.env('firstName')
    cy.contains(greeting)

    // Clean up
    cy.logout()
  })

  it('displays error with invalid credentials', () => {
    // Arrange
    cy.visit('/')
    cy.get('input[name=login]').type(Cypress.env('username'))
    cy.get('input[name=password]').type('password', { sensitive:true })

    // Act
    cy.contains('Login').click()

    // Assert
    cy.contains('Invalid username/password')
  })
})