import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
	LoginPage.visitLoginPage()
})

When('I submit valid login credentials', () => {
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password')
	LoginPage.submitForm()
})

Then('I should see the home page', () => {
	cy.url().should('include', 'account-summary.html')
	cy.get('#account_summary_tab').should('be.visible')
})
