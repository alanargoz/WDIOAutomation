class HeaderPage {
  get logoutLink() {
    return $('li:nth-of-type(4) > .nav-link');
  }

  get linkLink() {
    return $('li:nth-of-type(2) > .nav-link');
  }
  get heroFactsLink() {
    return $('a#navbarDropdown');
  }

  get wolverineOption() {
    return $('div > a:nth-of-type(1)');
  }

  get spiderOption() {
    return $('div > a:nth-of-type(2)');
  }

  get searchField() {
    return $('input#search-box');
  }

  get searchButton() {
    return $('form#search-form > .btn.btn-outline-success.my-2.my-sm-0');
  }

  get wolverinemodalWindow() {
    return $('div#wolverineModal .modal-header');
  }

  get wolverineModalTitleText() {
    return $('h5#wolverineModalLabel');
  }

  get wolverineModalContentText() {
    return $('div#wolverineModal .modal-body');
  }

  get wolverineModalCloseButton() {
    return $('#wolverineModal > div > div > div.modal-footer > button');
  }

  get spidermodalWindow() {
    return $('div#spidermanModal .modal-header');
  }

  get spiderModalTitleText() {
    return $('h5#spidermanModalLabel');
  }

  get spiderModalContentText() {
    return $('div#spidermanModal .modal-body');
  }

  get spiderModalCloseButton() {
    return $('#spidermanModal > div > div > div.modal-footer > button');
  }
}

module.exports = new HeaderPage();
