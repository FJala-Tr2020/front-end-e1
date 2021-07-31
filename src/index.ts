import * as ko from 'knockout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
require('knockout.validation');

import ModalVersion from './components/ModalVersion';
import Navbar from './components/Navbar';
import LeadTable from './pages/leadTable';

ko.components.register('modal-version', ModalVersion);
ko.components.register('navbar', Navbar);
ko.components.register('lead-table', LeadTable);

class ViewModel {}
ko.applyBindings(new ViewModel());
