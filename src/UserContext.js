import React from 'react';
import { useNavigate } from 'react-router-dom';
import db from './services/Db';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null); // Guarda as informações do usuario
  const [login, setLogin] = React.useState(null); // Guarda o estado true/false se tiver logado
  const [loginError, setLoginError] = React.useState(false);
  const navigate = useNavigate(); // Função para mudar a página ao término de alguma ação

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setLogin(false);
      setLoginError(false);
      window.localStorage.removeItem('username');
      navigate('/login');
    },
    [navigate],
  );

  async function getUser(username) {
    const response = await db.get(`user/${username}`);
    if (response) {
      setData(response.data);
      window.localStorage.setItem('username', response.data.email);
      return response.data;
    }
  }

  async function userLogin(username, password) {
    try {
      const user = await getUser(username);

      if (user && user.password === password) {
        setLogin(true);
        navigate('/');
        console.log('Login com sucesso!');
      } else {
        setLogin(false);
        setLoginError(true);
        console.log('Exibir mensagem de senha ou usuário errados!');
      }
    } catch (err) {
      console.log(err);
      setLogin(false);
      setLoginError(true);
      console.log('Algo deu errado!');
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const username = window.localStorage.getItem('username');
      if (username) {
        try {
          console.log('autoLogin');
          await getUser(username);
          setLogin(true);
          setLoginError(false);
        } catch {
          setLogin(false);
          userLogout();
        }
      }
    }

    autoLogin();
  }, [userLogout]);
  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        login,
        setLogin,
        userLogin,
        userLogout,
        navigate,
        loginError,
        setLoginError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
