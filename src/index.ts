import * as ko from 'knockout';
import ModalVersion from './components/ModalVersion';

require('knockout.validation');

ko.components.register('modal-version', ModalVersion);
class AppViewModel {
  version = function () {
    window.$('#myModal').modal('show');
  };
}

ko.applyBindings(new AppViewModel(), document.getElementById('app'));
