<<<<<<< HEAD
import styled from 'styled-components'

import Background from '../../assets/backeground-tela-login-codeburger.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 85%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737de;
  height: 85%;
  padding: 25px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 9px;
  }
  img {
    margin-bottom: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
export const Label = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: ${props => (props.error ? '2px' : '4px')};
  margin-bottom: 4px;
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  width: 285px;
  height: 34px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  padding-left: 10px;
`
export const SigInLink = styled.p`
  color: #fff;

  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  margin-top: 15px;

  a {
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
    cursor: pointer;
    text-decoration: underline;
  }
`
=======
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column; /* Alterado para coluna em dispositivos móveis */

  @media (min-width: 768px) {
    flex-direction: row; /* Mantém a direção de linha para telas maiores */
  }
`;

export const RightContainer = styled.div`
  background-size: cover;
  background-position: center;
  background: rgb(34,183,195);
  background: linear-gradient(0deg, rgba(34,183,195,1) 0%, rgba(4,167,225,1) 100%);

  height: 100%;
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px; /* Adicionado padding para melhorar o espaçamento em mobile */

  p {
    color: #fff;
    font-size: 16px; /* Fontes reduzidas para telas menores */
    font-weight: 800px;

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 18px; /* Aumenta o tamanho da fonte para telas maiores */
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 32px; /* Fontes reduzidas para telas menores */
  color: #9758a6;

  @media (min-width: 768px) {
    font-size: 40px; /* Aumenta o tamanho da fonte para telas maiores */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 300px; /* Reduz a largura máxima para telas menores */

  @media (min-width: 768px) {
    max-width: 400px; /* Aumenta a largura máxima para telas maiores */
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 48px; /* Reduz a altura dos inputs para telas menores */
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 16px; /* Fontes reduzidas para telas menores */
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 12px; /* Fontes reduzidas para telas menores */
    line-height: 80%;
    color: #cd3051;
    font-weight: 600;
    height: 10px;
  }

  @media (min-width: 768px) {
    input {
      height: 52px; /* Aumenta a altura dos inputs para telas maiores */
    }

    label {
      font-size: 18px; /* Aumenta o tamanho da fonte para telas maiores */
    }

    p {
      font-size: 14px; /* Aumenta o tamanho da fonte para telas maiores */
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
`;
>>>>>>> 1304559383b00a21845d6f60e1bba82e6448bbf8
