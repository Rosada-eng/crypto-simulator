import React from 'react';
import Button from '../button/Button';
import OperationForm from '../operationForm/OperationForm';

const Card = ({ name, marketCap, ranking, imgURL, currentValue, flutuation }) => {
  // flutuation, logo, description
  const [activeForm, setActiveForm] = React.useState('');
  function formatNumber(number){
    if(number >= 1e6) {
      return(number.toLocaleString('pt-BR', {minimumFractionDigits: 0}));
    }
    else if (number >= 1) {
      return(number.toLocaleString('pt-BR', {minimumFractionDigits: 2}));
    } else {
      return(number.toLocaleString('pt-BR', {minimumFractionDigits: 6}));
    }
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="marketCap">${formatNumber(marketCap)}</p>
      <p className="ranking">{ranking}º</p>
      <img className='logo' src={imgURL} alt='cryptocurrencie logo' />
      <p>$ {formatNumber(currentValue)}</p>
      <p>{flutuation.toFixed(2)}%</p>
      {!activeForm ? (
        <div className="buttons">
          <Button onClick={() => setActiveForm('Buy')}>Buy</Button>
          <Button onClick={() => setActiveForm('Sell')}>Sell</Button>
        </div>
      ) : null}
      <div className="operations">
        {activeForm ? (
          <div className="operations">
            <OperationForm
              cryptoId="btc"
              unitPrice={currentValue}
              operation={activeForm}
            />
            <button className="cancel" onClick={() => setActiveForm('')}>
              Cancel
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
