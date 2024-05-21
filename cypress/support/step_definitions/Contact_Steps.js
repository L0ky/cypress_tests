import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('I type a first name', () => {
    cy.get('[name="first_name"]').type('John')
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type('Doe')
})

When('I type an email address', () => {
    cy.get('[name="email"]').type('john.doe@email.com')
})

When('I type a message', () => {
    cy.get('textarea.feedback-input').type('This is a test message')
})

When('I click on the submit button', () => {
    cy.get('input[type="submit"]').click()
})

Then('I should see a success message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})

// Gestion des messages d'erreurs pour un email invalide
Then('I should see a error message', () => {
    cy.get('body').should('have.text', '\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
})