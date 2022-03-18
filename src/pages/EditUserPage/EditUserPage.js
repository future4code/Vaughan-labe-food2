import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {Input} from "@mantine/core";
import { Button } from "@mui/material";
import { Form } from "./Styled";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalStateContext";
import { updateProfile } from "../../services/User";

export default function EditUserPage() {
    const {profileData, loading} = useContext(GlobalContext)
    const [novoName, setNovoname] = useState(profileData.user && profileData.user.name)
    let initialName = profileData.user && profileData.user.name
    let initialEmail = profileData.user && profileData.user.email
    let initialCpf = profileData.user && profileData.user.cpf

    const [form, handleInputChange] = useForm({
        name:  novoName,
        email: initialEmail,
        cpf: initialCpf
    })

    // const initialName = profileData.user && profileData.user.name

    // console.log(profileData)
    // console.log('form', form)

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        // updateProfile(form)
    }

    // console.log('initialName', initialName)
    console.log(loading, initialName)

  return (
    <div>
      <Header title={"Editar"} arrow={"inline"} />

      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder="Nome"
          name="name"
          label='nome'
          onChange={handleInputChange}
          value={form.name}
          required
        />
        <Input
          placeholder="E-mail"
          name="email"
          onChange={handleInputChange}
          value={form.email}
          required
        />
        <Input
          placeholder="CPF"
          name="cpf"
          onChange={handleInputChange}
          value={form.cpf}
          pattern={'^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'}
          title={'Insira o CPF da seguinte forma: XXX.XXX.XXX-XX'}
          required
        />
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
  );
}
