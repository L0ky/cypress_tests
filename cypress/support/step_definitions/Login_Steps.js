import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('I type a username {string}', (username) => {
    cy.get('#text').type(username)
})

When('I type a password {string}', (password) => {
    cy.get('#password').type(password)
})

When('I click on the login button', () => {
    cy.get('#login-button').click()
})

Then('I should see a success login message', () => {
    Then('I should see a success message', () => {
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('validation succeeded');
        })
    })
})

// // Gestion des messages d'erreurs pour un email invalide
Then('I should see a error login message', () => {
    Then('I should see a success message', () => {
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('validation failed');
        })
    })
})