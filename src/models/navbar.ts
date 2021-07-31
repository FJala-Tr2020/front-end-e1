import * as ko from 'knockout';

require('knockout.validation');

class Navbar {
  isDisplayed: ko.Observable<boolean>;
  logo: ko.Observable<string>;
  records = [
    { id: 1, nombre: 'Leads', url: '/leads' },
    { id: 2, nombre: 'Sales', url: '/sales' }
  ];
  constructor() {
    this.isDisplayed = ko.observable(false);
    this.logo = ko.observable('CMS / EQ1');
  }
}
export default Navbar;
