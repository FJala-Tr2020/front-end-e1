import * as ko from 'knockout';
require('knockout.validation');
import LeadTable from './pages/leadTable';

ko.components.register('lead-table', LeadTable);

class ViewModel {
  version: string;
  logo: string;
  isDisplayed: ko.Observable<boolean>;
  constructor() {
    this.isDisplayed = ko.observable(false);
    this.version = 'Version X';
    this.logo = 'CMS / EQ1';
  }
  show() {
    this.isDisplayed(true);
  }
  hide() {
    this.isDisplayed(false);
  }
}
ko.applyBindings(new ViewModel());
