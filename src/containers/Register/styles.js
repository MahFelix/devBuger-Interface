import styled from 'styled-components'
import Background from '../../assets/backeground-tela-login-codeburger.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}') no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 85%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: rgba(55, 55, 55, 0.9);
  height: 85%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 24px;
    margin: 15px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`

export const Label = styled.label`
  color: ${props => (props.error ? '#CC1717' : '#fff')};
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
`

export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  height: 35px;
  border: ${props => (props.error ? '2px solid #CC1717' : '1px solid #ddd')};
  padding: 0 10px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`

export const SigInLink = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 10px;

  a {
    color: #4a90e2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
