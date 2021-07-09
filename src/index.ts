import * as ko from 'knockout';
import * as Sammy from 'sammy';
require('knockout.validation');
import 'bootstrap/dist/css/bootstrap.min.css';

import LeadTable from './pages/leadTable';

ko.components.register('lead-table', LeadTable);
class AppViewModel {
  lead: { url: string };
  constructor() {
    this.lead = {
      url: 'leadTable.html'
    };
  }
}

class AppMainViewModel {
  tableLeadsVisible: ko.Observable<boolean>;

  constructor() {
    // These values are hard-coded but could come from a server API request with JSON response
    this.tableLeadsVisible = ko.observable(false);
  }
  showVisibleTableLEads(): void {
    console.log('Esta visible!!!');
    this.tableLeadsVisible(true);
  }
  hiddenTableLeads(): void {
    console.log('Esta invisible!!!');
    this.tableLeadsVisible(false);
  }
}
const appPrincipal = new AppMainViewModel();

const app: Sammy.Application = Sammy();
app.get('#/foobar', () => {
  appPrincipal.showVisibleTableLEads();
});
app.get('#/goToHome', () => {
  appPrincipal.hiddenTableLeads();
});
app.run();

ko.applyBindings(appPrincipal, document.getElementById('mainView'));
ko.applyBindings(new AppViewModel(), document.getElementById('newPage'));
