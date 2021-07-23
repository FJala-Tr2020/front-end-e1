import axios from 'axios';
export interface ILead {
  date: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  lang: string;
}
class Lead {
  miData: any;
  constructor() {
    this.miData = ():any =>
      new Promise((resolve) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
          resolve(
            data.map((item: ILead) => [
              '02/31/2021',
              item.website,
              item.name,
              item.email,
              item.phone,
              'La Paz',
              'Bol',
              'Esp'
            ])
          );
        });
      });
  }
}
export default Lead;
