import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Wallet } from './wallet.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import styled from './UserMenu.module.css';
import { UserContext } from '../../UserContext';

const UserMenu = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <div className={styled.menuBox}>
      <div className={styled.container}>
        <Link to="/wallet" className={styled.link}>
          <Wallet className={styled.logo} fill={'#eec643'} /> Carteira
        </Link>
        <hr className={styled.bar} />

        <Link to="/login" className={styled.link} onClick={userLogout}>
          <Logout className={styled.logo} fill={'#eec643'} />
          Sair
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
