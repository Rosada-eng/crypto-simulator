import React from 'react';
import db from '../../services/Db';
import { UserContext } from '../../UserContext';
import styled from './TradeModal.module.css';
const TradeModal = ({ operation }) => {
  const [quantity, setQuantity] = React.useState(0);
  const global = React.useContext(UserContext);

  async function tradeMoneyToAccount() {
    let body = { amount: operation === 'Depositar' ? quantity : -quantity };

    const edited_user = await db
      .post(`trade_to_account/${global.data.id}/`, body)
      .then((response) => response.data);

    if (edited_user) {
      global.setData(edited_user);
    }
  }
  return (
    <div className={styled.modal}>
      <forms>
        <label htmlFor="value">Valor: </label>
        <div className={styled.container}>
          <p>$</p>
          <input
            id="value"
            className={styled.inputBar}
            type="number"
            placeholder={0}
            min={0}
            step={500}
            onChange={(event) => setQuantity(event.target.value)}
          />
          {operation === 'Depositar' ? (
            <input
              className={styled.Depositar}
              type="submit"
              value={operation}
              onClick={tradeMoneyToAccount}
            />
          ) : (
            <input
              className={styled.Retirar}
              type="submit"
              value={operation}
              onClick={tradeMoneyToAccount}
            />
          )}
        </div>
      </forms>
    </div>
  );
};

export default TradeModal;
