import axios from 'axios';
export interface ISales {
  name: string;
  email: string;
  phone: string;
}
class Sales {
  miData: any;
  constructor(url: string) {
    this.miData = (): any =>
      axios.get(url).then(({ data }) => data.map((item: ISales) => [item.name, item.email, item.phone]));
  }
}
export default Sales;
