import React from 'react';
import db from '../../services/Db';
import styled from './RegisterForms.module.css';
import { UserContext } from '../../UserContext';

const RegisterForms = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const global = React.useContext(UserContext);

  async function RegisterUser(event) {
    event.preventDefault();
    try {
      const created_user = await db
        .post('new_user/', {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        })
        .then((response) => response.data);
      console.log(created_user);
      if (created_user) {
        global.setData(created_user);
        window.localStorage.setItem('username', created_user.email);
        global.setLogin(true);
        global.setLoginError(false);
        alert(`Parabéns!! Você começará com $10 mil para simular alguns investimentos.
Caso queira, você pode simular depósitos e saques na sua conta. Basta acessar sua Carteira.`);
        global.navigate('/');
      }
    } catch {
      console.log('Algo deu errado no registro');
      global.setLoginError(true);
    }
  }

  React.useEffect(() => {
    global.setLoginError(false);
  }, []);
  return (
    <div className={styled.container}>
      <div className={styled.box}>
        <h2 className={styled.title}>Cadastro</h2>
        <form className={styled.form} onSubmit={RegisterUser}>
          <div className={styled.firstName}>
            <label className="firstNameLabel" htmlFor="firstName">
              Nome:{' '}
            </label>
            <input
              className={styled.inputField}
              id="firstName"
              type="text"
              placeholder="Bárbara"
              required
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
          </div>
          <div className={styled.lastName}>
            <label className="lastNameLabel" htmlFor="lastName">
              Sobrenome:{' '}
            </label>
            <input
              className={styled.inputField}
              id="lastName"
              type="text"
              placeholder="Agena"
              onChange={(event) => setLastName(event.target.value)}
              required
            ></input>
          </div>
          <div className={styled.email}>
            <label className="emailLabel" htmlFor="email">
              Email:{' '}
            </label>
            <input
              className={styled.inputField}
              id="email"
              type="email"
              placeholder="barbara.agena@insper.edu.br"
              onChange={(event) => setEmail(event.target.value)}
              required
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
              required
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button className={styled.send} value="Registrar">
            Registrar
          </button>
          {global.loginError ? (
            <p className={styled.error}>
              Dados incorretos ou já existentes. Por favor, tente novamente.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default RegisterForms;
