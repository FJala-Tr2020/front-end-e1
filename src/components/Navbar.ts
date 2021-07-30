import Navbar from '../models/navbar';
import template from './Navbar.html';
import * as ko from 'knockout';
import page from 'page';
import { index, leads, sales, about } from '../router/router';
class NavbarView {
  navbar: Navbar;
  logo: ko.Observable<string>;
  registros = [
    { id: 1, nombre: 'Leads', url: '/leads' },
    { id: 2, nombre: 'Sales', url: '/sales' },
    { id: 1, nombre: 'About', url: '/about' }
  ];
  constructor(params: { navbar: Navbar }) {
    this.navbar = params.navbar;
    this.logo = ko.observable('CMS / EQ1');
    page('/', index);
    page('/leads', leads);
    page('/Sales', sales);
    page('/about', about);
    page();
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: NavbarView, template: template };
