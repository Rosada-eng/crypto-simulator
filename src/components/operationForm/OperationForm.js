import React from 'react';
import Button from '../button/Button';
import db from '../../services/Db';

const OperationForm = ({ cryptoId, unitPrice, operation }) => {
  const [data, setData] = React.useState(null);
  const [quantity, setQuantity] = React.useState(0);

  function buyAction() {
    db.post('/broker/new_trade/', {
      user_id: 4, // virá do usuário logado --> //!Use Context
      crypto_id: cryptoId, // virá do cartão que o usuario selecionou //$(Pai)
      unit_price: unitPrice, // virá do cartão que o usuário selecionou
      quantity:
        operation === 'Buy' ? parseFloat(quantity) : -parseFloat(quantity), // virá de input do usuario
    }).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <div>
      <input
        type="number"
        onChange={(event) => setQuantity(event.target.value)}
      ></input>
      <Button onClick={buyAction}>{operation}</Button>
    </div>
  );
};

export default OperationForm;
