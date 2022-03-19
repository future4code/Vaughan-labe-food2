import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import useForm from '../../hooks/useForm';
import { Input } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { CreateAddressContainer } from './Styled';
import Header from '../../components/Header/Header';
import { addAddress } from '../../services/Address';
import useProtectedPage from '../../hooks/useProtectedPage';


export default function CreateAddressPage() {
    useProtectedPage()

    const navigate = useNavigate()

    const [form, handleInputChange] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    const submitForm = (event) => {
        event.preventDefault()
        addAddress(form, navigate, 'createAddress')
    }

    return (
        <div>
            <Header logout={'none'} />
            <CreateAddressContainer>
                <Typography color='neutral' sx={{ fontWeight: 'bold', mt: '18px', mb: '40px', fontSize: '20px' }}>Meu Endereço</Typography>
                <form onSubmit={submitForm}>
                    <Input
                        required
                        placeholder="Logradouro"
                        name='street'
                        value={form.street}
                        onChange={handleInputChange}
                        size="lg"
                        min={3}
                    />
                    <Input
                        required
                        placeholder="Número"
                        name='number'
                        value={form.number}
                        onChange={handleInputChange}
                        size="lg"
                        type='number'
                    />
                    <Input
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