import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import apiCodeBurger from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';
import { useState } from 'react';
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
} from './styles';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button/';

const schema = yup.object({
    email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O email é obrigatório'),
    password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
}).required();

export function Login() {

    const { putUserData } = useUser();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (clientData) => {
        const response = await toast.promise(
            apiCodeBurger.post('/sessions', {
                email: clientData.email,
                password: clientData.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return 'Seja Bem-Vindo(a)👌';
                    },
                },
                error: 'Email ou Senha Incorretos 🤯'
            }
        );
        
        putUserData(response.data);
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span> Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type='email'  {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type='password' {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to={"/cadastro"}>Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    );
}
