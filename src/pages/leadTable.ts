import Lead from '../models/lead';
import { Grid } from 'gridjs';
import template from './leadTable.html';
class LeadTable {
  response: {};
  check = new Lead('https://jsonplaceholder.typicode.com/users');
  constructor() {
    this.response = new Grid({
      columns: ['Creation Date', 'Title', 'Name', 'Email', 'Phone', 'City', 'Country', 'Language'],
      data: this.check.miData
    }).render(document.getElementById('leadTable')!);
  }
}
export default { viewModel: LeadTable, template: template };
