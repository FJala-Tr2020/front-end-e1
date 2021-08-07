import template from './AddSalesItem.html';
import * as ko from 'knockout';

class AddItem {
  name: ko.Observable<string>;
  phone: ko.Observable<string>;
  email: ko.Observable<string>;
  isDisplayed: ko.Observable<boolean>;

  constructor() {
    this.name = ko.observable('');
    this.phone = ko.observable('');
    this.email = ko.observable('');
    this.isDisplayed = ko.observable(false);
  }
  show() {
    this.isDisplayed(true);
    setTimeout(() => {
      this.isDisplayed(false);
    }, 2000);
  }
}

export default { viewModel: AddItem, template: template };
