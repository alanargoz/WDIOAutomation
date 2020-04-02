class IntroPage {
  get titleText() {
    return $('.container-fluid  h1');
  }

  get mainImage() {
    return $('.container-fluid  img');
  }
}

module.exports = new IntroPage();
