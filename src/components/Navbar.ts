import Navbar from '../models/navbar';
import template from './Navbar.html';
import page from 'page';
import { index, leads, sales } from '../router/router';
class NavbarView {
  navbarModel: Navbar;
  constructor() {
    this.navbarModel = new Navbar();
    page('/', index);
    page('/leads', leads);
    page('/Sales', sales);
    page();
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: NavbarView, template: template };
