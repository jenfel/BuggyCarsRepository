describe('Register', () => {
  it('successfully loads', () => {
    cy.register()
  })

  it('does not allow same username in registration', () => {
    // Arrange
    cy.visit('/')
    cy.contains('Register').click()

    // Act
    cy.get('input[id=username]').type('RapidTest1000')
    cy.get('input[id=firstName]').type('RapidTest1000')
    cy.get('input[id=lastName]').type('RapidTest1000')
    cy.get('input[id=password]').type('RapidTest1000!')
    cy.get('input[id=confirmPassword]').type('RapidTest1000!')
    cy.contains('button', 'Register').click()

    // Assert
    cy.contains('User already exists')
  })
})