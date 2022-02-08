Cypress.Commands.add('infoLog', { prevSubject: 'optional'}, (subject, message) => {
    cy.task('infoLog', message, {log: false});
})