import template from './ModalVersion.html';
import * as ko from 'knockout';
import client from '../api/client';

class ModalVersion {
  version: ko.Observable<string> = ko.observable(' ');
  pathVersion = '/version';

  constructor() {
    this.sayVersion();
  }

  sayVersion(): void {
    client.get(this.pathVersion).then((response) => {
      return this.version(response.data.version);
    });
  }
}

export default { viewModel: ModalVersion, template: template };
