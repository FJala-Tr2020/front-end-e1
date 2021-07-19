import * as ko from 'knockout';
import ModalVersion from './components/ModalVersion';
import Navbar from './components/Navbar';

require('knockout.validation');

ko.components.register('modal-version', ModalVersion);
ko.components.register('navbar', Navbar);
class AppViewModel {}

ko.applyBindings(new AppViewModel(), document.getElementById('app'));
