import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//Success Scenario
Given('I have money in savings', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
	cy.loginToApp('username', 'password')
})

Then('I put in transfer to another account', () => {
	cy.url().should('include', 'account-summary.html')
})

When('The money should transfer', () => {
	cy.get('#account_summary_tab').should('be.visible')
})
