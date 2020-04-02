class VotePage {
  get voteTitle() {
    return $('h4');
  }

  get firstItem() {
    return $("div:nth-of-type(1) > input[name='heroMovieRadio']");
  }

  get secondItem() {
    return $("div:nth-of-type(2) > input[name='heroMovieRadio']");
  }

  get thirdItem() {
    return $("div:nth-of-type(3) > input[name='heroMovieRadio']");
  }

  get fourthItem() {
    return $("div:nth-of-type(4) > input[name='heroMovieRadio']");
  }
  get fifthTitle() {
    return $("div:nth-of-type(5) > input[name='heroMovieRadio']");
  }
  get submitButton() {
    return $('form#vote-form > .btn.btn-primary');
  }

  get voteItemText1() {
    return $('tbody tr:nth-of-type(1) td:nth-of-type(1)');
  }

  get voteItemVal1() {
    return $('tbody tr:nth-of-type(1) td:nth-of-type(2)');
  }

  get voteItemText2() {
    return $('tbody tr:nth-of-type(2) td:nth-of-type(1)');
  }

  get voteItemVal2() {
    return $('tbody tr:nth-of-type(2) td:nth-of-type(2)');
  }

  get voteItemText3() {
    return $('tbody tr:nth-of-type(3) td:nth-of-type(1)');
  }

  get voteItemVal3() {
    return $('tbody tr:nth-of-type(3) td:nth-of-type(2)');
  }

  get voteItemText4() {
    return $('tbody tr:nth-of-type(4) td:nth-of-type(1)');
  }

  get voteItemVal4() {
    return $('tbody tr:nth-of-type(4) td:nth-of-type(2)');
  }

  get voteItemText5() {
    return $('tbody tr:nth-of-type(5) td:nth-of-type(1)');
  }

  get voteItemVal5() {
    return $('tbody tr:nth-of-type(5) td:nth-of-type(2)');
  }

  get thanksAlert() {
    return $('#vote-alert');
  }
}

module.exports = new VotePage();
