import { Input, InputWrapper } from '@mantine/core';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { GlobalContext } from '../../global/GlobalStateContext';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import { addAddress } from '../../services/Address';
import { Form } from './Styled';


export default function EditAddressPage() {
    useProtectedPage()
    const { addressData, getAddressData } = useContext(GlobalContext)
    let initialCity = addressData.address && addressData.address.city
    let initialComplement = addressData.address && addressData.address.complement
    let initialNeighbourhood = addressData.address && addressData.address.neighbourhood
    let initialNumber = addressData.address && addressData.address.number
    let initialState = addressData.address && addressData.address.state
    let initialStreet = addressData.address && addressData.address.street

    const [form, handleInputChange] = useForm({
        street: initialStreet,
        number: initialNumber,
        neighbourhood: initialNeighbourhood,
        city: initialCity,
        state: initialState,
        complement: initialComplement
    })

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        addAddress(form, navigate, 'editAddress', getAddressData)

    }

    return (
        <div>
            <Header title={'Endereço'} arrow={'inline'} logout={'none'} />

            <Form onSubmit={onSubmitForm}>
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
                <Button
                    sx={{ mt: "5px" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Salvar
                </Button>
            </Form>
        </div>
    )
}