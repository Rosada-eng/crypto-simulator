import React from 'react';
import { tokenApi } from '../services/Token';

const TestButton = () => {
  async function getToken() {
    return await tokenApi.get('token').then((response) => response.data.token);
  }

  async function getMessage() {
    let token = await getToken();
    let message = await tokenApi.post('/message', { token: token });
    if (message.status === 200) {
      console.log(message.data.mensagem);
      return message.data.mensagem;
    }
  }

  return (
    <div>
      <button onClick={getMessage}> TESTE API </button>
    </div>
  );
};

export default TestButton;
