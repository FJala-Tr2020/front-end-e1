import template from '../pages/leadTable.html';
import { Grid } from 'gridjs';
import axios from 'axios';
export interface ILead {
  createDate:string
  title:string
  contactName:string
  email:string
  phone:string
  city:string
  country:string
  language:string
}
class LeadTable {
  response = {};
  constructor() {
    this.response = new Grid(
    //   {
    //   columns: ['Creation Date', 'Title', 'Name', 'Email', 'Phone', 'City', 'Country', 'Language'],
    //   server: {
    //     data: () => {
    //       return new Promise((resolve) => {
    //         axios.get('http://localhost:3000/leads').then(({ data }) => {
    //           resolve({
    //             data: data.data.map((lead:ILead) => [lead.createDate, lead.title, lead.contactName, lead.email, lead.phone, lead.city, lead.country, lead.language]),
    //             total: 2
    //           });
    //         });
    //       });
    //     }
    //   }
    // }
    {
      columns: ['Name', 'Email', 'Phone Number'],
      data: () => [
        ['John', 'john@example.com', '(353) 01 222 3333'],
        ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
      ]
    }
    ).render(document.getElementById('leadTable')!);
  }
}
// export const table = new LeadTable();
export default { viewModel: LeadTable, template: template };
