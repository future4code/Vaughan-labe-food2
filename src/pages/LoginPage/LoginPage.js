import React, { useEffect, useState } from 'react';
import InitialPage from '../InitialPage/InitialPage';
import Button from '@mui/material/Button';
import whitelogo from '../../assets/whitelogo.png'
import { LoginContainer } from './Styled'
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input, InputWrapper } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { login } from '../../services/User'
import { useNavigate } from "react-router-dom";
import { goToSignUp } from '../../routes/Coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function LoginPage() {
    useUnprotectedPage()

    const navigate = useNavigate()

    const [initial, setInitial] = useState(true);
    const [form, handleInputChange] = useForm({
        email: "",
        password: ""
    })

    useEffect(() => {
        setTimeout(() => {
            setInitial(false)
        }, 3000)
    }, [])

    const submitForm = (event) => {
        event.preventDefault()
        login(form, navigate)
    }

    return (
        <>
            {initial ? <InitialPage /> :
                <LoginContainer>
                    <img src={whitelogo} alt={'Logo futureEats'} />
                    <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '28px', mb: '20px', fontSize: '20px' }}>Entrar</Typography>

                    <form onSubmit={submitForm}>
                        <InputWrapper description="E-mail" />
                        <Input
                            placeholder="email@email.com"
                            name="email"
                            onChange={handleInputChange}
                            value={form.email}
                            type='email'
                            required
                        />

                        <InputWrapper description="Senha" />
                        <PasswordInput
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
                        <Button sx={{ width: '100%', m: '16px 0' }} variant="contained" color="primary" type='submit'>
                            Entrar
                        </Button>
                    </form>

                    <Button variant="text" color='neutral' onClick={() => goToSignUp(navigate)} sx={{ fontSize: '12px' }}>

                        Não possui cadastro? Clique aqui
                    </Button>
                </LoginContainer>
            }
        </>
    )
}