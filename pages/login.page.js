class LoginPage {
  get headingText() {
    return $('#id="login-title"');
  }
  get emailLabel() {
    return $('#form-login > div:nth-of-type(1) > label');
  }

  get emailField() {
    return $('input#loginEmail');
  }

  get passwordLabel() {
    return $('#form-login > div:nth-of-type(2) > label');
  }

  get passwordField() {
    return $('input#loginPassword');
  }

  get rememberLoginCheckBox() {
    return $('input#rememberLoginChk');
  }

  get rememberLoginLabel() {
    return $('form#form-login  .form-check-label');
  }

  get submitButton() {
    return $('form#form-login > .btn.btn-primary');
  }

  get overlay() {
    return $('#overlay');
  }
}

module.exports = new LoginPage();
