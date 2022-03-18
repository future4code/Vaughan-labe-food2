import React, { useEffect, useState } from 'react';
import InitialPage from '../InitialPage/InitialPage';
import Button from '@mui/material/Button';
import whitelogo from '../../assets/whitelogo.png'
import { LoginContainer } from './Styled'
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input } from '@mantine/core';
import { At } from 'tabler-icons-react';
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { login } from '../../services/User'

export default function LoginPage() {

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
        login(form)
    }

    return (
        <>
            {/* {initial ? <InitialPage /> : <h1>Login</h1>} */}
            <LoginContainer>
                <img src={whitelogo} alt={'Logo futureEats'} />
                <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '28px', mb: '20px' }}>Entrar</Typography>

                <form onSubmit={submitForm}>
                    <Input
                        icon={<At />}
                        placeholder="E-mail"
                        name='email'
                        value={form.email}
                        onChange={handleInputChange}
                    />
                    <PasswordInput
                        color='#5CB646'
                        placeholder="Senha"
                        defaultValue="secret"
                        name='password'
                        value={form.password}
                        onChange={handleInputChange}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                        }
                    />
                    <Button sx={{ mt: "5px" }} variant="contained" color="primary" type='submit'>
                        Entrar
                    </Button>
                </form>

                <Button variant="text" color='neutral'>
                    Não possui cadastro? Clique aqui
                </Button>
            </LoginContainer>

        </>
    )
}