Cypress.Commands.add('logInUser', function()  {
    cy.infoLog(`Log in user ${this.user.userName} with password ${this.user.password}`)
    cy.clickElement('.item-logIn > button')
    cy.clearAndType('input[name="identification"]', this.user.userName)
    cy.clearAndType('input[name="password"]', this.user.password)
    cy.clickElement('button[type="submit"]')
})
