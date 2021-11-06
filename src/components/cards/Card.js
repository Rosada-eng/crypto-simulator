import React from 'react';
import Button from '../button/Button';
import OperationForm from '../operationForm/OperationForm';

const Card = ({ name, currentValue }) => {
  // flutuation, logo, description
  const [activeForm, setActiveForm] = React.useState('');

  return (
    <div className="card">
      <h2>{name}</h2>
      <h4 className="type">cryptocurrencie</h4>
      <p> LOGO </p>
      <p>$ {currentValue}</p>
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
              unitPrice={50}
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
