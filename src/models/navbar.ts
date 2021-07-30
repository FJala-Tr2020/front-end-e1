import * as ko from 'knockout';

require('knockout.validation');

class Navbar {
  isDisplayed: ko.Observable<boolean>;
  constructor() {
    this.isDisplayed = ko.observable(false);
  }
}

export default Navbar;
