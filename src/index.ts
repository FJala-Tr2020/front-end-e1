import * as ko from 'knockout';
require('knockout.validation');
import LeadTable from './pages/leadTable';

ko.components.register('lead-table', LeadTable);

class ViewModel {
  registros = [
    { id: 1, nombre: 'Name1', skill: 'skill 1' },
    { id: 2, nombre: 'Name2', skill: 'Skill 2' },
    { id: 3, nombre: 'Name3', skill: 'Skill 3' }
  ];
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
