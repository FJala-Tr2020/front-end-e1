import template from './Navbar.html';
import * as ko from 'knockout'
require('knockout.validation');

class Navbar {
  showLeadTable = ()=>{
    document.getElementById("tableOfLeads")!.style.display = "inline";
  }
  hideLeadTable = ()=>{
    document.getElementById("tableOfLeads")!.style.display = "none";
  }
  logo: string;
  isDisplayed: ko.Observable<boolean>;
  constructor() {
    this.logo = 'CMS / EQ1';
  
    this.isDisplayed = ko.observable(false);
  }
 
}

export default { viewModel: Navbar, template: template };
