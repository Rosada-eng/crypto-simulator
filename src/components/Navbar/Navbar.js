import React from 'react';
import styled from './Navbar.module.css';
import { ReactComponent as Logo } from './dollar.svg';
// import { ReactComponent as Wallet } from './wallet.svg';
import { ReactComponent as Coin } from './dollar-coin.svg';

const Navbar = () => {
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <div className={styled.brand}>
          <Logo fill={'#ecb242c2'} />
          <p className={styled.title}>Crypto Simulator</p>
        </div>
        <div className={styled.login}>
          <p>Sign in</p>/<p>Login</p>
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
