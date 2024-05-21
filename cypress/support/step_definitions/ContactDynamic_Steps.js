import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('I type a first name {string}', (firstname) => {
    cy.get('[name="first_name"]').type(firstname)
})

When('I type a last name {string}', (lastname) => {
    cy.get('[name="last_name"]').type(lastname)
})

When('I type an email address {string}', (email) => {
    cy.get('[name="email"]').type(email)
})

When('This is a test message {string} and {int}', (message, num) => {
    cy.get('textarea.feedback-input').type(message + ", " + num)
})