import * as ko from 'knockout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
require('knockout.validation');

import ModalVersion from './components/ModalVersion';
import Navbar from './components/Navbar';
import LeadTable from './pages/leadTable';
import SalesTable from './pages/salesTable';
import AddSalesItem from './components/AddSalesItem';
ko.components.register('modal-version', ModalVersion);
ko.components.register('navbar', Navbar);
ko.components.register('lead-table', LeadTable);
ko.components.register('sales-table', SalesTable);
ko.components.register('sales-add-item', AddSalesItem);

class ViewModel {}
ko.applyBindings(new ViewModel());
