import React from 'react';
import styled from './Login.module.css';

const Login = () => {
  return (
    <div className={styled.container}>
      <div className={styled.box}>
        <h2 className={styled.title}>Login</h2>
        <form className={styled.form}>
          <div className={styled.username}>
            <label className="Userlabel" htmlFor="username">
              Usuário:{' '}
            </label>
            <input
              className={styled.inputField}
              id="username"
              type="text"
              placeholder="email@email.com"
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
              placeholder="**********"
            ></input>
          </div>
          <input className={styled.send} type="submit" value="Entrar"></input>
          <p className={styled.disclaimer}>
            Não tem uma conta?{' '}
            <a className="signUp" href="#">
              Registrar-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
