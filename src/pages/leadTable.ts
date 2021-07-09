import template from '../pages/leadTable.html';
import { Grid } from 'gridjs';

class LeadTable {
  response = {};
  constructor() {
    this.response = new Grid({
      columns: ['Creation Date', 'Title', 'Name', 'Email', 'Phone', 'City', 'Country', 'Language'],
      server: {
        url: 'https://api.scryfall.com/cards/search?q=Inspiring',
        data: (opts) => {
          return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState === 4) {
                if (this.status === 200) {
                  const resp = JSON.parse(this.response);
                  resolve({
                    data: resp.data.map(lead => [lead.released_at, lead.rarity, lead.name, lead.artist + '@mail.com', lead.collector_number + '-333', 'La Paz', lead.artist, lead.lang]),
                    total: resp.total_cards,
                  });
                } else {
                  reject();
                }
              }
            };
            xhttp.open("GET", opts.url, true);
            xhttp.send();
          });
        }
      }
    }).render(document.getElementById('leadTable')!);
  }
}
export const table = new LeadTable();
export default { viewModel: LeadTable, template: template };
