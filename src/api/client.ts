import axios from 'axios';

const client = axios.create({
  baseURL: process.env.DB_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;
