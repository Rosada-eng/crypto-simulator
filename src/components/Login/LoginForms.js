import React from 'react';
import { Link } from 'react-router-dom';
import styled from './LoginForms.module.css';
import { UserContext } from '../../UserContext';

const LoginForms = () => {
  const global = React.useContext(UserContext);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function LogInUser(event) {
    event.preventDefault();
    global.userLogin(username, password);
  }
  return (
    <div className={styled.container}>
      <div className={styled.box}>
        <h2 className={styled.title}>Login</h2>
        <form className={styled.form} onSubmit={LogInUser}>
          <div className={styled.username}>
            <label className="Userlabel" htmlFor="username">
              Usuário:{' '}
            </label>
            <input
              className={styled.inputField}
              id="username"
              type="text"
              value={username}
              placeholder="email@email.com"
              required
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </div>
          <div className={styled.password}>
            <label className="PassLabel" htmlFor="password">
              Senha:{' '}
            </label>
            <input
              className={styled.inputField}
              id="password"
              type="password"
              value={password}
              placeholder="**********"
              required
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button className={styled.send} type="submit" value="Entrar">
            Entrar
          </button>
          <p className={styled.disclaimer}>
            Não tem uma conta?{' '}
            <Link className="signUp" to="/register">
              Registrar-se
            </Link>
          </p>
          {global.loginError ? (
            <p className={styled.error}>
              Dados incorretos. Por favor, tente novamente.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default LoginForms;
