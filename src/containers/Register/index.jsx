import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import apiCodeBurger from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

export function Register() {
    const navigate = useNavigate();
 
    const { 
        register,
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

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
}
