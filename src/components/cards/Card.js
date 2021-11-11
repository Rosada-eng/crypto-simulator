import React from 'react';
import OperationForm from '../operationForm/OperationForm';
import './card.css';

const Card = ({ id, name, ranking, imgURL, currentValue, flutuation }) => {
  // flutuation, logo, description
  const [activeForm, setActiveForm] = React.useState('');
  function formatNumber(number) {
    if (number >= 1e6) {
      return number.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
    } else if (number >= 1) {
      return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    } else {
      return number.toLocaleString('pt-BR', { minimumFractionDigits: 6 });
    }
  }
  return (
    <div className="card" onMouseLeave={() => setActiveForm('')}>
      <div className="box">
        <div className="content">
          {name.length > 13 ? (
            <h2 className="bigName">{name}</h2>
          ) : (
            <h2 className="name">{name}</h2>
          )}

          <p className="ranking">{ranking}º</p>
          {/* <p className="marketCap">${formatNumber(marketCap)}</p> */}
          <img className="logo" src={imgURL} alt="cryptocurrencie logo" />
          <p className="currentValue">$ {formatNumber(currentValue)}</p>
          {flutuation > 0 ? (
            <div className="variation">
              {/* TODO: adicionar simbolo de UP / DOWN */}
              <p style={{ color: '#118707' }}>
                + {flutuation.toFixed(2).replace('.', ',')} %
              </p>
            </div>
          ) : (
            <div className="variation">
              {/* TODO: adicionar simbolo de UP / DOWN */}
              <p style={{ color: '#d92121' }}>
                - {(-1 * flutuation).toFixed(2).replace('.', ',')} %{' '}
              </p>
            </div>
          )}
          {/* TODO: Fazer desativar botão de operations ao clicar fora do card! */}
          <div className="operations">
            {!activeForm ? (
              <div className="buttons">
                <button className="Buy" onClick={() => setActiveForm('Buy')}>
                  Buy
                </button>
                <button className="Sell" onClick={() => setActiveForm('Sell')}>
                  Sell
                </button>
              </div>
            ) : (
              <OperationForm
                className="operationForm"
                cryptoId={id}
                unitPrice={currentValue}
                operation={activeForm}
                onClickAction={setActiveForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
