import React from 'react';
import styled from './Navbar.module.css';
import { ReactComponent as Logo } from './dollar.svg';
// import { ReactComponent as Wallet } from './wallet.svg';
import { ReactComponent as Coin } from './dollar-coin.svg';
import { ReactComponent as User } from '../../assets/account.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Navbar = () => {
  const global = React.useContext(UserContext);
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <Link className={styled.brand} to="/">
          <Logo fill={'#ecb242c2'} />
          <p className={styled.title}>Crypto Simulator</p>
        </Link>
        {global.login && global.data ? (
          <div className={styled.login}>
            <p className={styled.logged}>{global.data.first_name}</p>
            <User className={styled.logged} fill={'#ecb242'} />
          </div>
        ) : (
          <div className={styled.login}>
            <Link className={styled.link} to="/register">
              Registrar
            </Link>
            <p> / </p>
            <Link className={styled.link} to="/login">
              Entrar
            </Link>
          </div>
        )}
      </div>

      {global.login ? (
        <div className={styled.currentMoney}>
          <Coin fill={'1c1a13'} />
          <p>{`$ ${global.data.initial_money.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}`}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
