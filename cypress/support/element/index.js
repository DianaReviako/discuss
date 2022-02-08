Cypress.Commands.add('clickElement', (selector) => {
    cy.infoLog(`Click element with selector ${selector}`)
    cy.get(selector).click()
})

Cypress.Commands.add('clearAndType', (selector, text) => {
    cy.infoLog(`Clear input with selector${selector} and type text ${text}`)
    cy.get(selector).clear().type(text)
})

Cypress.Commands.add('isElementPresent', (selector) => {
    cy.infoLog(`Check is element with selector ${selector} present`)
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isTextPresent', (selector, text) => {
    cy.infoLog(`Check is element with selector ${selector} have text ${text}`)
    cy.get(selector).should('have.text', text)
})

Cypress.Commands.add('clickEnterKey', (selector) => {
    cy.infoLog(`Click enter key`)
    cy.get(selector).type('{enter}')
})