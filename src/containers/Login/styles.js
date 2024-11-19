// styles.js
import styled from 'styled-components';
import Background from '../../assets/backeground-tela-login-codeburger.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: rgba(55, 55, 55, 0.87);
  height: 70%;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0;
  }

  img {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  width: 100%;
  height: 40px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  box-shadow: 0 4px 8px rgba(74, 144, 226, 0.19);
  padding-left: 10px;
  outline: none;

  &:focus {
    border: 2px solid #4A90E2;
  }
`;

export const SigInLink = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  margin-top: 15px;

  a {
    color: #fff;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;
