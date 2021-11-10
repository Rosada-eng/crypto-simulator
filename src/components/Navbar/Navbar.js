import React from 'react';
import styled from './Navbar.module.css';
import { ReactComponent as Logo } from './dollar.svg';
// import { ReactComponent as Wallet } from './wallet.svg';
import { ReactComponent as Coin } from './dollar-coin.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <Link className={styled.brand} to="/">
          <Logo fill={'#ecb242c2'} />
          <p className={styled.title}>Crypto Simulator</p>
        </Link>
        <div className={styled.login}>
          <Link className={styled.link} to="/register">
            Registrar
          </Link>
          <p> / </p>
          <Link className={styled.link} to="/login">
            Entrar
          </Link>
        </div>
      </div>

      <div className={styled.currentMoney}>
        <Coin fill={'1c1a13'} />
        <p>$ 65.482,33</p>
      </div>
    </div>
  );
};

export default Navbar;
