import React from 'react';
import styled from './RegisterForms.module.css';

const RegisterForms = () => {
  return (
    <div className={styled.container}>
      <div className={styled.box}>
        <h2 className={styled.title}>Cadastro</h2>
        <form className={styled.form}>
          <div className={styled.firstName}>
            <label className="firstNameLabel" htmlFor="firstName">
              Nome:{' '}
            </label>
            <input
              className={styled.inputField}
              id="firstName"
              type="text"
              placeholder="Bárbara"
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
            ></input>
          </div>
          <div className={styled.email}>
            <label className="emailLabel" htmlFor="email">
              Email:{' '}
            </label>
            <input
              className={styled.inputField}
              id="email"
              type="text"
              placeholder="barbara.agena@insper.edu.br"
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
          <input
            className={styled.send}
            type="submit"
            value="Registrar"
            // TODO: Fazer habilitar somente depois de preencher os campos
            // disabled={}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default RegisterForms;
