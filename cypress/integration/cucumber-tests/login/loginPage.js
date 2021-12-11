const URL = 'http://zero.webappsecurity.com/index.html';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SUBMIT_BTN = 'input[value="Sign in"]';
const SIGNIN_BTN = '#signin_button';
const ERROR_MESSAGE = '.alert-error';

class LoginPage {
	static visitLoginPage() {
		cy.visit(URL);
		cy.get(SIGNIN_BTN).click();
	}
	static fillUsername(name) {
		cy.get(USERNAME_INPUT).type(name);
	}
	static fillPassword(password) {
		cy.get(PASSWORD_INPUT).type(password);
	}
	static submitForm() {
		cy.get(SUBMIT_BTN).click();
	}

	static checkForErrorMessage() {
		cy.get(ERROR_MESSAGE).should('be.visible');
	}
}

export default LoginPage;
