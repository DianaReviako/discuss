/// <reference types="cypress" />

describe('discuss.flaru', () => {
  beforeEach(function() {
    cy.visit('/')
    cy.fixture('user').then(user => {
      this.user = user
    });
    cy.fixture('testText').then(testText => {
      this.text = testText
    });
  })

  it('test discuss.flarum', function() {
    cy.isElementPresent('img.Header-logo')
    cy.logInUser()

    cy.isTextPresent('.Button-label > .username', this.user.userName)
    cy.clickElement('.Button-label > .username')
    cy.isElementPresent('.item-profile')
    cy.isElementPresent('.item-settings')
    cy.isElementPresent('.item-logOut')

    cy.clickElement('.item-settings')
    cy.isTextPresent('.Button-label > .username', this.user.userName)
    cy.isElementPresent('.Settings-notifications')

    cy.clickElement('.UserBio-content')

    cy.clearAndType('textarea.FormControl', this.text.defaultText)
    cy.intercept(/api/, {body: {data: {type: "users", attributes: {bio: this.text.stubbedText}, id: "38767"}}}).as('api')
    cy.clickEnterKey('textarea.FormControl')
    cy.wait('@api')
    cy.isTextPresent('.UserBio-content > p', this.text.stubbedText)
    cy.reload()
    cy.isTextPresent('.UserBio-content > p', this.text.stubbedText)
  })
})