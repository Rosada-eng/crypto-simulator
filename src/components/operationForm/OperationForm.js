import React from 'react';
import db from '../../services/Db';
import styled from './OperationForm.module.css';

const OperationForm = ({ cryptoId, unitPrice, operation, onClickAction }) => {
  const [data, setData] = React.useState(null);
  const [quantity, setQuantity] = React.useState(0);

  function tradeAction() {
    db.post('/broker/new_trade/', {
      user_id: 5, // virá do usuário logado --> //!Use Context
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
    <div className={styled.container}>
      <input
        className={styled.inputForm}
        type="number"
        min={0}
        step={0.001}
        onChange={(event) => setQuantity(event.target.value)}
      ></input>
      <button
        className={operation === 'Buy' ? styled.Buy : styled.Sell}
        onClick={tradeAction}
      >
        {operation}
      </button>
      <button
        className={`${styled.buttons} ${styled.cancelButton}`}
        onClick={() => onClickAction('')}
      >
        Cancel
      </button>
    </div>
  );
};

export default OperationForm;
