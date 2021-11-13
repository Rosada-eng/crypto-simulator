import React from 'react';
import styled from './Navbar.module.css';
import { ReactComponent as Logo } from '../../assets/dollar.svg';
import { ReactComponent as Coin } from '../../assets/dollar-coin.svg';
import { ReactComponent as User } from '../../assets/account.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import UserMenu from './UserMenu.js';

const Navbar = () => {
  const global = React.useContext(UserContext);
  const [menu, setMenu] = React.useState(false);
  const node = React.useRef();

  const handleClick = (e) => {
    if (global.login && node.current.contains(e.target)) {
      // dentro do click -- Não faz nada
      return;
    } else {
      setMenu(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <Link to="/" className={styled.brand}>
          <Logo fill={'#ecb242c2'} />
          <p className={styled.title}>Crypto Simulator</p>
        </Link>
        {global.login && global.data ? (
          <div
            ref={node}
            className={styled.login}
            onClick={() => setMenu(!menu)}
            onMouse
          >
            <p className={styled.logged}>{global.data.first_name}</p>
            <User className={styled.logged} fill={'#ecb242'} />
            {menu ? <UserMenu /> : null}
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
          <p>{`$ ${global.data.current_money.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}`}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
