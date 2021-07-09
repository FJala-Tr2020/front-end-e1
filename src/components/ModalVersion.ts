import template from './ModalVersion.html';
import * as ko from 'knockout';
import client from '../api/client';

class ModalVersion {
  version: ko.Observable<string | null>;

  constructor() {
    client.get('/version').then(function (response) {
      window.localStorage.setItem('version', response.data.version);
    });
    this.version = ko.observable(window.localStorage.getItem('version'));
  }
}

export default { viewModel: ModalVersion, template: template };
