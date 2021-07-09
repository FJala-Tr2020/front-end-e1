import * as ko from 'knockout';
require('knockout.validation');
import 'bootstrap/dist/css/bootstrap.min.css';

import LeadTable from './pages/leadTable';

ko.components.register('lead-table', LeadTable);
class AppViewModel {
    lead: {url:string}
    constructor(){
        this.lead = {
            url: 'leadTable.html'
        }
    }
}
// console.log('object')

ko.applyBindings(new AppViewModel(), document.getElementById('newPage'));


