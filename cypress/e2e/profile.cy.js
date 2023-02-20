describe('Profile', () => {
  beforeEach(() => {
    cy.login()
    cy.contains('Profile').click()
  })

  afterEach(() => {
    cy.logout()
  })

  it('successfully loads user profile', () => {
    cy.get('input[id=username]').should('have.value', Cypress.env('username'))
    cy.get('input[id=firstName]').should('have.value', Cypress.env('firstName'))
    cy.get('input[id=lastName]').should('have.value', Cypress.env('lastName'))
  })

  it('successfully updates profile changes', () => {
    cy.get('input[id=gender]').type('Female')
    cy.get('input[id=age]').type('25 years old')
    cy.get('textarea[id=address]').type('1 Jungfraujoch, Switzerland 1234')
    cy.get('input[id=phone]').type('0987654321')
    cy.get('select[id=hobby]').select('Learning')
    cy.contains('Save').click()

    cy.get('input[id=gender]').should('have.value','Female')
    cy.get('input[id=age]').should('have.value', '25 years old')
    cy.get('textarea[id=address]').should('have.value','1 Jungfraujoch, Switzerland 1234')
    cy.get('input[id=phone]').should('have.value','0987654321')
    cy.get('select[id=hobby]').should('have.value','Learning')
  })
})