import React from 'react';
import db from '../../services/Db';
import styled from './OperationForm.module.css';
import { UserContext } from '../../UserContext';

const OperationForm = ({
  cryptoId,
  cryptoName,
  unitPrice,
  operation,
  onClickAction,
}) => {
  const global = React.useContext(UserContext);
  const [quantity, setQuantity] = React.useState(0);

  async function tradeAction(event) {
    event.preventDefault();
    if (global.login) {
      try {
        const response = await db
          .post('/broker/new_trade/', {
            user_id: global.data.id, // virá do usuário logado --> //!Use Context
            crypto_id: cryptoId, // virá do cartão que o usuario selecionou //$(Pai)
            crypto_name: cryptoName, // virá do cartão que o usuario selecionou //$(Pai)
            unit_price: unitPrice, // virá do cartão que o usuário selecionou //$(Pai)
            quantity:
              operation === 'Buy'
                ? parseFloat(quantity)
                : -parseFloat(quantity), // virá de input do usuario
          })
          .then((response) => {
            console.log(response);
            alert(
              `Operação realizada com sucesso!\n${
                operation === 'Buy' ? 'COMPRA: ' : 'VENDA: '
              }${quantity}x ${cryptoId} por $${unitPrice * quantity}`,
            );
            if (operation === 'Buy') {
              global.setData({
                ...global.data,
                current_money:
                  parseFloat(global.data.current_money) -
                  parseFloat(unitPrice) * parseFloat(quantity),
              });
            } else {
              global.setData({
                ...global.data,
                current_money:
                  parseFloat(global.data.current_money) +
                  parseFloat(unitPrice) * parseFloat(quantity),
              });
            }
          });
        if (response && response.status !== 200) {
          console.log(
            'Não foi possível realizar a transação. Por favor, tente novamente.',
          );
          alert(
            'Não foi possível realizar a transação. Por favor, tente novamente.',
          );
        }
      } catch {
        console.log('Não foi possível realizar a transação. Tente novamente.');
        alert(
          'Não foi possível realizar a transação. Por favor, tente novamente.',
        );
      }
    } else {
      alert('Você precisa estar logado para realizar uma transação!');
    }
  }

  return (
    <form className={styled.container} onSubmit={tradeAction}>
      <input
        className={styled.inputForm}
        type="number"
        min={0}
        step={0.00001}
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        required
      ></input>
      <button className={operation === 'Buy' ? styled.Buy : styled.Sell}>
        {operation}
      </button>
      <button
        className={`${styled.buttons} ${styled.cancelButton}`}
        onClick={() => onClickAction('')}
      >
        Cancel
      </button>
    </form>
  );
};

export default OperationForm;
