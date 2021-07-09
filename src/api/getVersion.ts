import { AxiosResponse } from 'axios';
import client from './client';

const getVersion = {
  sayVersion: async function (): Promise<string> {
    let response;
    try {
      const request = await client.get('/version');
      response = request.data;
    } catch (e) {
      response = e.message;
    }
    return response;
  }
};

export { getVersion };
