// import Person from '../models/person';
import template from '../pages/leadTable.html';
import {Grid} from 'gridjs';

class LeadTable {
    response = {};
  constructor() {
      
    this.response = new Grid({ 
        columns: ['Creation Date','Title','Name', 'Email', 'Phone', 'City', 'Country', 'Language'],
        data: [
          ['08/07/2021','Independent','John', 'john@example.com','333-333','La Paz','Bolivia','Spanish'],
          ['08/07/2021','Independent II','Mike', 'mike@example.com','444-444','Santa Cruz','Bolivia','Spanish'],
        ] 
      }).render(document.getElementById('leadTable'));
  }
}
// The default export returns the component details object to register with KO
export default { viewModel: LeadTable, template: template };
