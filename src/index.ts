import * as ko from 'knockout';
import ModalVersion from './components/ModalVersion';
import Navbar from './components/Navbar';
import LeadTable from './pages/leadTable';

require('knockout.validation');
import 'bootstrap/dist/css/bootstrap.min.css';

ko.components.register('lead-table', LeadTable);
ko.components.register('modal-version', ModalVersion);
ko.components.register('navbar', Navbar);
class AppViewModel {
  lead: { url: string };
  constructor() {
    this.lead = {
      url: 'leadTable.html'
    };
  }
}
ko.applyBindings(new AppViewModel(), document.getElementById('app'));
