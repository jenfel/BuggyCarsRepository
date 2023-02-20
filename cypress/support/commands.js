Cypress.Commands.add('login', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    
    cy.visit('/')
    cy.get('input[name=login]').type(username)
    cy.get('input[name=password]').type(password, { sensitive:true })
    cy.contains('Login').click()
})

Cypress.Commands.add('logout', () => {
    cy.contains('Logout').click()
    cy.contains('Login')
})

Cypress.Commands.add('setupTestForVoting', () => {
    cy.register()
    cy.visit('/')
    cy.readFile('cypress/fixtures/testData.json').then((testData) => {
        cy.get('input[name=login]').type(testData.username)
        cy.get('input[name=password]').type(testData.password, { sensitive:true })
        cy.contains('Login').click()
    });
    cy.get('a[href="/overall"]').click();
})

Cypress.Commands.add('register', () => {
    const randomString = Math.random().toString()
    const password = 'RapidTest1001!'
    cy.visit('/')
    cy.contains('Register').click()

    cy.get('input[id=username]').type(randomString)
    cy.get('input[id=firstName]').type(randomString)
    cy.get('input[id=lastName]').type(randomString)
    cy.get('input[id=password]').type(password)
    cy.get('input[id=confirmPassword]').type(password)
    cy.contains('button', 'Register').click()

    cy.contains('Registration is successful')

    const testData = {
        username: randomString,
        password: password
    }

    cy.writeFile('cypress/fixtures/testData.json', testData);
})