import React, { useState } from 'react';
import Button from '@mui/material/Button';
import whitelogo from '../../assets/whitelogo.png'
import { SignUpContainer } from './Styled'
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { signUp } from '../../services/User'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';



export default function SignUpPage() {
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
        if (verifyPassword === form.password)
            signUp(form, navigate)
    }

    const verify = (event) => {
        setVerifyPassword(event.target.value)
    }

    return (
        <>
            <Header />
            <SignUpContainer>
                <img src={whitelogo} alt={'Logo futureEats'} />
                <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '28px', mb: '20px', fontSize: '20px'}}>Cadastrar</Typography>

                <form onSubmit={submitForm}>
                    <Input
                        required
                        placeholder="Nome"
                        name='name'
                        value={form.name}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Email"
                        name='email'
                        value={form.email}
                        onChange={handleInputChange}
                        type='email'
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="CPF"
                        name='cpf'
                        value={form.cpf}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <PasswordInput
                        sx={{ marginBottom: '16px'}}
                        required
                        placeholder="senha"
                        min={6}
                        name='password'
                        value={form.password}
                        onChange={handleInputChange}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                        }
                        size="lg"
                    />
                    <PasswordInput
                        required
                        placeholder="senha"
                        min={6}
                        name='password'
                        value={verifyPassword}
                        onChange={verify}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                        }
                        size="lg"
                    />
                    <Button sx={{ width: '100%', m: '16px 0' }} variant="contained" color="primary" type='submit'>
                        Criar
                    </Button>
                </form>

            </SignUpContainer>
        </>
    )
}
