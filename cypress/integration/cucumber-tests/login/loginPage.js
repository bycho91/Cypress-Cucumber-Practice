const URL = 'http://zero.webappsecurity.com/index.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BTN = 'input[value="Sign in"]'

class LoginPage {
	//visit webpage
	static visitLoginPage() {
		cy.visit(URL)
	}
	//fill username
	static fillUsername(name) {
		cy.get(USERNAME_INPUT).type(name)
	}
	//fill password
	static fillPassword(password) {
		cy.get(PASSWORD_INPUT).type(password)
	}
	//submit form
	static submitForm() {
		cy.get(SUBMIT_BTN).click()
	}
}

export default LoginPage
