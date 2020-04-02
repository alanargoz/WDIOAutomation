class RosterPage {
  get instructionTest() {
    return $('p');
  }

  get listTitle() {
    return $('h3');
  }

  get rosterItems() {
    return $$('#hero-list > li');
  }

  get wolverineItem() {
    return $('#hero-list > li:nth-of-type(1)');
  }

  get ironmanItem() {
    return $('#hero-list > li:nth-of-type(2)');
  }

  get deadpoolItem() {
    return $('#hero-list > li:nth-of-type(3)');
  }

  get thorItem() {
    return $('#hero-list > li:nth-of-type(4)');
  }

  get spidermanItem() {
    return $('#hero-list > li:nth-of-type(5)');
  }

  get addHeroLabel() {
    return $('#addHero-form  label');
  }

  get addHeroField() {
    return $('#heroInput');
  }

  get submitButton() {
    return $('#addHero-form > .btn.btn-primary');
  }

  get newItem() {
    return $('#hero-list > li:nth-of-type(6)');
  }

  /**
   *
   * @param {*} hero
   */
  addHero(hero) {
    this.addHeroField.setValue(hero);
    this.submitButton.click();
  }
}

module.exports = new RosterPage();
