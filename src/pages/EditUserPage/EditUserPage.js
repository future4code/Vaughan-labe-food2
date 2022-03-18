import React from "react";
import Header from "../../components/Header/Header";
import {Input, InputWrapper} from "@mantine/core";
import { Button } from "@mui/material";
import { Form } from "./Styled";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalStateContext";
import { updateProfile } from "../../services/User";

export default function EditUserPage() {
    const {profileData, loading} = useContext(GlobalContext)
    let initialName = profileData.user && profileData.user.name
    let initialEmail = profileData.user && profileData.user.email
    let initialCpf = profileData.user && profileData.user.cpf

    const [form, handleInputChange] = useForm({
        name:  initialName,
        email: initialEmail,
        cpf: initialCpf
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        
        if (form.cpf[3] === "-" || form.cpf[7] === "-" || form.cpf[11] === "." ) {
          alert("CPF inválido!");
          return false;
        }
        updateProfile(form)
    }


  return (
    <div>
      <Header title={"Editar"} arrow={"inline"} />

      <Form onSubmit={onSubmitForm}>
        <InputWrapper description="Nome">
          <Input
            placeholder="Nome"
            name="name"
            label='nome'
            onChange={handleInputChange}
            value={form.name}
            min="3"
            required
          />
        </InputWrapper>
        <InputWrapper description="E-mail">
          <Input
            placeholder="E-mail"
            name="email"
            type={"email"}
            onChange={handleInputChange}
            value={form.email}
            required
          />
        </InputWrapper>
        <InputWrapper description="CPF">
          <Input
            placeholder="CPF"
            name="cpf"
            type="text"
            onChange={handleInputChange}
            value={form.cpf}
            pattern={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}'}
            title={'Insira o CPF da seguinte forma: XXX.XXX.XXX-XX'}
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
  );
}
