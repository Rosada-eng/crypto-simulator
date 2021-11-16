import axios from 'axios';

const db = axios.create({
  baseURL: 'https://backend-cryptosimulator.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default db;
