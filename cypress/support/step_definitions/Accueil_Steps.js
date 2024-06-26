import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const url = 'https://www.webdriveruniversity.com/'

Given('I navigate to the webuniversity home page', () => {
    cy.visit(url)
})

When('I click on the contact us button', () => {
    cy.get('#contact-us').invoke("removeAttr", "target").click()
})

When('I click on the login portal button', () => {
    cy.get('#login-portal').invoke("removeAttr", "target").click()
})