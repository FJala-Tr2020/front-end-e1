import template from './Navbar.html';
require('knockout.validation');

class Navbar {
  version = function (): void {
    $('#myModal').modal('show');
  };
}

export default { viewModel: Navbar, template: template };
