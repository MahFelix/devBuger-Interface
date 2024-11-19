import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

<<<<<<< HEAD
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import RegisterImg from '../../assets/img-register-codeburger.svg'
import Logo from '../../assets/logo-codeburger.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SigInLink
} from './styles'
=======
import { 
    Container, 
    Form, 
    InputContainer, 
    RightContainer, 
    Title, 
    Link 
} from './styles';
import { Button } from '../../components/Button/';

const schema = yup.object({
    name: yup
        .string()
        .required('O nome é obrigatório'),
    email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    phoneNumber: yup
        .string()
        .min(11, 'O número de celular deve conter os dígitos + DDD')
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
}).required();
>>>>>>> 1304559383b00a21845d6f60e1bba82e6448bbf8

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

<<<<<<< HEAD
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Usuário cadastrado com sucesso')
      } else if (status === 409) {
        toast.error('Email já cadastrado')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-codeburger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    {...register("email")}
  />
</form>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 16, marginBottom: 10 }}>
            Cadastrar
          </Button>
        </form>
        <SigInLink style={{ marginBottom: 10 }}>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Entrar
          </Link>
        </SigInLink>
      </ContainerItens>
    </Container>
  )
=======
        try {
            const {status} = await apiCodeBurger.post('/users', {
                email: data.email,
                name: data.name,
                password: data.password,
            },
            {
                validateStatus: () => true,
            });

        if(status === 200 || status === 201) {
            setTimeout(() => {  
                navigate('/login')
            }, 2000);
            toast.success('Conta criada com sucesso!')
        } else if (status === 400) {
            toast.error('Email já cadastrado! Faça login para continuar')
        } else {
            toast.error('Erro desconhecido ao criar a conta.')
        }

        } catch (error) {
            toast.error('Falha no sistema! Tente novamente');
        }
    };

    return (
        <Container>
            <RightContainer>
                <Title>
                    Criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type='text' {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    
                    <InputContainer>
                        <label>Email</label>
                        <input type='email' {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Número de Telefone</label>
                        <input type='text' {...register("phoneNumber")} />
                        <p>{errors?.phoneNumber?.message}</p>
                    </InputContainer>
                    
                    <InputContainer>
                        <label>Senha</label>
                        <input type='password' {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type='password' {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui</Link></p>
            </RightContainer>
        </Container>
    );
>>>>>>> 1304559383b00a21845d6f60e1bba82e6448bbf8
}
