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
  constructor(url: string) {
    this.miData = (): any =>
      axios
        .get(url)
        .then(({ data }) =>
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
  }
}
export default Lead;
