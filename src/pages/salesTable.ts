import Sales from '../api/sales';
import { Grid } from 'gridjs';
import template from './salesTable.html';
class salesTable {
  response: {};
  check = new Sales('https://jsonplaceholder.typicode.com/users/');
  constructor() {
    this.response = new Grid({
      columns: ['Name', 'Email', 'Phone'],
      data: this.check.miData,
      className: {
        table: 'table'
      }
    }).render(document.getElementById('salesTable')!);
  }
}
export default { viewModel: salesTable, template: template };
