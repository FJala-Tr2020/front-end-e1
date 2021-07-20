import template from '../pages/leadTable.html';
import { Grid } from 'gridjs';
import axios from 'axios';
interface ILead {
  released_at:string
  name:string
  artist:string

}
class LeadTable {
  response = {};
  constructor() {
    this.response = new Grid({
      columns: ['Creation Date', 'Title', 'Name', 'Email', 'Phone', 'City', 'Country', 'Language'],
      server: {
        data: () => {
          return new Promise((resolve) => {
            //'http://localhost:3000/leads',
            axios.get('https://api.scryfall.com/cards/search?q=Inspiring').then(({ data }) => {
              resolve({
                // data: data.data.map(lead => [lead.createDate, lead.title, lead.contactName, lead.email, lead.phone, lead.city, lead.country, lead.language]),
                data: data.data.map((lead:ILead) => [lead.released_at, lead.name, lead.artist, lead.name+'@mail.com',11111, '2',3,"ESP"]),
                total: 2
              });
            });
          });
        }
      }
    }).render(document.getElementById('leadTable')!);
  }
}
export const table = new LeadTable();
export default { viewModel: LeadTable, template: template };
