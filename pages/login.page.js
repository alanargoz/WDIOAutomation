class LoginPage {
  get headingText() {
    return $('#login-title');
  }
  get emailLabel() {
    return $('#form-login > div:nth-of-type(1) > label');
  }

  get emailField() {
    return $('#loginEmail');
  }

  get passwordLabel() {
    return $('#form-login > div:nth-of-type(2) > label');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberLoginCheckBox() {
    return $('#rememberLoginChk');
  }

  get rememberLoginLabel() {
    return $('#form-login  .form-check-label');
  }

  get submitButton() {
    return $('#form-login > .btn.btn-primary');
  }

  get overlay() {
    return $('#overlay');
  }
  /**
   *
   * @param {*} email
   * @param {*} password
   */
  LoginIntoPage(email, password) {
    this.emailField.setValue(email);
    this.passwordField.setValue(password);
    this.submitButton.click();
  }
}

module.exports = new LoginPage();
