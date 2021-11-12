import React from 'react';
import styled from './Wallet.module.css';
import withdrawIcon from '../../assets/withdraw_yellow_bg.png';
// import withdrawIcon from '../../assets/withdraw_golden_bg.png';
// import depositIcon from '../../assets/deposit_golden_bg.png';
import depositIcon from '../../assets/deposit_green_bg.png';
const Wallet = () => {
  const [showDeposit, setShowDeposit] = React.useState(false);
  const [showWithdraw, setShowWithdraw] = React.useState(false);
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <h1 className={styled.investor}>Guilherme</h1>
        <div className={styled.resume}>
          <p className={styled.currentMoney}>$ 127.653,58</p>
          <div className={styled.transactions}>
            <div className={styled.operation}>
              <img
                src={depositIcon}
                className={styled.icon}
                alt={'Depositar dinheiro'}
                onMouseEnter={() => setShowDeposit(true)}
                onMouseLeave={() => setShowDeposit(false)}
              />
              {showDeposit ? (
                <p className={styled.subtitle}>Depositar</p>
              ) : null}
            </div>
            <div className={styled.operation}>
              <img
                src={withdrawIcon}
                className={styled.icon}
                alt={'Retirar dinheiro'}
                onMouseEnter={() => setShowWithdraw(true)}
                onMouseLeave={() => setShowWithdraw(false)}
              />
              {showWithdraw ? <p className={styled.subtitle}>Retirar</p> : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styled.tableBox}>
        <table className={styled.table}>
          <thead>
            <tr>
              <td>Nome</td>
              <td>qtd</td>
              <td>Preço Atual</td>
              <td>Preço Médio</td>
              <td>Lucro</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td>1,536</td>
              <td>$ 65.348,67</td>
              <td>$ 62.300,20</td>
              <td>+ 6.573,01</td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>22,536</td>
              <td>$ 27.348,67</td>
              <td>$ 128.300,20</td>
              <td>+ 32.573,01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
