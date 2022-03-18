import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import { SignUpContainer } from './Styled'
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input } from '@mantine/core';
// import { signUp } from '../../services/User'
import { useNavigate } from "react-router-dom";
import { CreateAddressContainer } from './Styled';
import Header from '../../components/Header/Header';


export default function CreateAddressPage() {

    const navigate = useNavigate()

    const [form, handleInputChange] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    // const submitForm = (event) => {
    //     event.preventDefault()

    //     signUp(form, navigate)
    // }

    return (
        <div>
            <Header/>
            <CreateAddressContainer>
                <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '18px', mb: '40px', fontSize: '20px' }}>Meu Endereço</Typography>
                <form>
                    <Input
                        required
                        placeholder="Logradouro"
                        name='street'
                        value={form.street}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Número"
                        name='number'
                        value={form.number}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Complemento"
                        name='complement'
                        value={form.complement}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Bairro"
                        name='neighbourhood'
                        value={form.neighbourhood}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Cidade"
                        name='city'
                        value={form.city}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Input
                        required
                        placeholder="Estado"
                        name='state'
                        value={form.state}
                        onChange={handleInputChange}
                        size="lg"
                    />
                    <Button sx={{ width: '100%', m: '16px 0' }} variant="contained" color="primary" type='submit'>
                        Salvar
                    </Button>
                </form>
            </CreateAddressContainer>
        </div>
    )
}