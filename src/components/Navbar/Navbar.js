import React from 'react';
import styled from './Navbar.module.css';
import { ReactComponent as Logo } from './dollar.svg';

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
        <p>$ 65.482,33</p>
      </div>
    </div>
  );
};

export default Navbar;
