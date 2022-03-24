import React, { useState } from 'react';
import Button from '@mui/material/Button';
import whitelogo from '../../assets/whitelogo.png'
import { SignUpContainer } from './Styled'
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input, InputWrapper } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { signUp } from '../../services/User'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function SignUpPage() {
    useUnprotectedPage()

    const navigate = useNavigate()

    const [verifyPassword, setVerifyPassword] = useState(undefined)

    const [form, handleInputChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const submitForm = (event) => {
        event.preventDefault()
        if (verifyPassword !== form.password) {
            alert("Senhas diferentes.")
            return false
        }
        if (form.cpf[3] === "-" || form.cpf[7] === "-" || form.cpf[11] === ".") {
            alert("CPF inválido!");
            return false;
        }

        signUp(form, navigate)
    }

    const verify = (event) => {
        setVerifyPassword(event.target.value)
    }

    return (
        <>
            <Header logout={'none'} />
            <SignUpContainer>
                <img src={whitelogo} alt={'Logo futureEats'} />
                <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '28px', mb: '20px', fontSize: '20px' }}>Cadastrar</Typography>

                <form onSubmit={submitForm}>
                    <InputWrapper description="Nome" />
                    <Input
                        required
                        placeholder="Nome e sobrenome"
                        name='name'
                        value={form.name}
                        onChange={handleInputChange}
                        min={3}
                    />
                    <InputWrapper description="E-mail" />
                    <Input
                        required
                        placeholder="email@email.com"
                        name='email'
                        value={form.email}
                        onChange={handleInputChange}
                        type='email'
                    />
                    <InputWrapper description="CPF" />
                    <Input
                        required
                        placeholder="000.000.000-00"
                        name='cpf'
                        value={form.cpf}
                        onChange={handleInputChange}
                        pattern={'^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$'}
                    />
                    <InputWrapper description="Senha" />
                    <PasswordInput
                        sx={{ marginBottom: '16px' }}
                        required
                        placeholder="Mínimo 6 caracteres"
                        min={6}
                        name='password'
                        value={form.password}
                        onChange={handleInputChange}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                        }
                    />
                    <InputWrapper description="Confirmar" />
                    <PasswordInput
                        required
                        placeholder="Confirme a senha anterior"
                        min={6}
                        name='password'
                        value={verifyPassword}
                        onChange={verify}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                        }
                    />
                    <Button sx={{ width: '100%', m: '16px 0' }} variant="contained" color="primary" type='submit'>
                        Criar
                    </Button>
                </form>

            </SignUpContainer>
        </>
    )
}
