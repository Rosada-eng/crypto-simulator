import React from 'react';
import db from '../../services/Db';
import { UserContext } from '../../UserContext';
import styled from './TradeModal.module.css';
const TradeModal = ({ operation }) => {
  const [quantity, setQuantity] = React.useState('');
  const global = React.useContext(UserContext);
  const [showTraded, setShowTraded] = React.useState(false);

  async function tradeMoneyToAccount(event) {
    event.preventDefault();
    let body = { amount: operation === 'Depositar' ? quantity : -quantity };

    const edited_user = await db
      .post(`trade_to_account/${global.data.id}/`, body)
      .then((response) => response.data);

    if (edited_user) {
      global.setData(edited_user);
      setShowTraded(true);
    }
  }

  React.useEffect(() => {
    setShowTraded(false);
  }, [quantity]);
  return (
    <div className={styled.modal}>
      <form onSubmit={tradeMoneyToAccount}>
        <label htmlFor="value">Valor: </label>
        <div className={styled.container}>
          <p>$</p>
          <input
            id="value"
            className={styled.inputBar}
            type="number"
            placeholder={0}
            value={quantity}
            min={0}
            step={500}
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
          {operation === 'Depositar' ? (
            <button
              className={styled.Depositar}
              type="submit"
              value={operation}
            >
              Depositar
            </button>
          ) : (
            <button className={styled.Retirar} type="submit" value={operation}>
              Retirar
            </button>
          )}
        </div>
      </form>
      {showTraded ? (
        <p className={styled.withdrawTrade}>
          {operation === 'Depositar' ? '+' : '-'} ${quantity},00
        </p>
      ) : null}
    </div>
  );
};

export default TradeModal;
