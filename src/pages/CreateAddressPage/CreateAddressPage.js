import React from 'react';
import Button from '@mui/material/Button';
import useForm from '../../hooks/useForm';
import { Input, InputWrapper } from '@mantine/core';
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
            <Header logout={'none'} arrow={'none'} title={'Meu Endereço'} />
            <CreateAddressContainer>
                <form onSubmit={submitForm}>
                    <InputWrapper description="Logradouro">
                        <Input
                            placeholder="Rua / Av."
                            name="street"
                            onChange={handleInputChange}
                            value={form.street}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper description="Número">
                        <Input
                            placeholder="Número"
                            name="number"
                            type="number"
                            onChange={handleInputChange}
                            value={form.number}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper description="Complemento">
                        <Input
                            placeholder="Apto. / Bloco"
                            name="complement"
                            onChange={handleInputChange}
                            value={form.complement}
                        />
                    </InputWrapper>
                    <InputWrapper description="Bairro">
                        <Input
                            placeholder="Bairro"
                            name="neighbourhood"
                            onChange={handleInputChange}
                            value={form.neighbourhood}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper description="Cidade">
                        <Input
                            placeholder="Cidade"
                            name="city"
                            onChange={handleInputChange}
                            value={form.city}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper description="Estado">
                        <Input
                            placeholder="Estado"
                            name="state"
                            onChange={handleInputChange}
                            value={form.state}
                            required
                        />
                    </InputWrapper>
                    <Button sx={{ width: '100%', m: '16px 0' }} variant="contained" color="primary" type='submit'>
                        Salvar
                    </Button>
                </form>
            </CreateAddressContainer>
        </div>
    )
}
