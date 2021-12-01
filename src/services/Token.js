import axios from 'axios';

export const tokenApi = axios.create({
  baseURL: 'https://enigmatic-bayou-56424.herokuapp.com/guilhermer4/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function getToken() {
  return await tokenApi.get('token').then((response) => response.data.token);
}

export async function getMessage() {
  let token = await getToken();
  let message = await tokenApi.post('/message', { token: token });
  if (message.status === 200) {
    return message.data.mensagem;
  }
}
