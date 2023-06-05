import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";
import { Button } from "../components/buttons/button-default/Button";

export const RegisterPage = () => {
  const { theme } = useContext(ThemeContext);

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const inputText = form.querySelectorAll(".input");
    const select = form.querySelector("#select");

    const newErrors = {};

    inputText.forEach((input) => {
      if (input.value === "") {
        newErrors[input.name] = "Campo obrigatório!";
      }
    });

    if (select.value === "") {
      newErrors.select = "Campo obrigatório!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulário enviado com sucesso!");
    }
  };

  return (
    <>
      <Container
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <ContentBox theme={theme}>
          <FormContainer id="form" theme={theme} onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>

            <InputGroups theme={theme}>
              <InputGroup theme={theme}>
                <FormControl
                  theme={theme}
                  className={errors.name ? "error" : ""}
                >
                  <label htmlFor="name">Nome completo</label>
                  <input
                    className={`input ${errors.name ? "filling-error" : ""}`}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                  />
                  {errors.name && <small>{errors.name}</small>}
                </FormControl>
                <FormControl
                  theme={theme}
                  className={errors.email ? "error" : ""}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    className={`input ${errors.email ? "filling-error" : ""}`}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                  />
                  {errors.email && <small>{errors.email}</small>}
                </FormControl>
                <FormControl
                  theme={theme}
                  className={errors.cpf ? "error" : ""}
                >
                  <label htmlFor="cpf">CPF</label>
                  <input
                    className={`input ${errors.cpf ? "filling-error" : ""}`}
                    id="cpf"
                    type="number"
                    name="cpf"
                    placeholder="Digite seu CPF"
                  />
                  {errors.cpf && <small>{errors.cpf}</small>}
                </FormControl>

                <FormControl
                  theme={theme}
                  className={errors.select ? "error" : ""}
                >
                  <label htmlFor="job">Gênero</label>
                  <select
                    className={`input ${errors.select ? "filling-error" : ""}`}
                    id="select"
                    name="gender"
                  >
                    <option value="">Escolha um opção</option>
                    <option value="sim">Feminino</option>
                    <option value="não">Masculino</option>
                    <option value="não">Outro</option>
                  </select>
                  {errors.select && <small>{errors.select}</small>}
                </FormControl>
              </InputGroup>
              <InputGroup theme={theme}>
                <FormControl
                  theme={theme}
                  className={errors.identity ? "error" : ""}
                >
                  <label htmlFor="identity">Identidade</label>
                  <input
                    className={`input ${
                      errors.identity ? "filling-error" : ""
                    }`}
                    id="identity"
                    type="number"
                    name="identity"
                    placeholder="Digite seu RG"
                  />
                  {errors.identity && <small>{errors.identity}</small>}
                </FormControl>
                <FormControl
                  theme={theme}
                  className={errors.birthdate ? "error" : ""}
                >
                  <label htmlFor="birthdate">Nascimento</label>
                  <input
                    className={`input ${
                      errors.birthdate ? "filling-error" : ""
                    }`}
                    id="birthdate"
                    type="date"
                    name="birthdate"
                    placeholder="dd/mm/aaaa"
                  />
                  {errors.birthdate && <small>{errors.birthdate}</small>}
                </FormControl>

                <FormControl
                  theme={theme}
                  className={errors.phone ? "error" : ""}
                >
                  <label htmlFor="phone">Celular</label>
                  <input
                    className={`input ${errors.phone ? "filling-error" : ""}`}
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                  />
                  {errors.phone && <small>{errors.phone}</small>}
                </FormControl>

                <FormControl
                  theme={theme}
                  className={errors.select ? "error" : ""}
                >
                  <label htmlFor="job">PCD?</label>
                  <select
                    className={`input ${errors.select ? "filling-error" : ""}`}
                    id="select"
                    name="pcd"
                  >
                    <option value="">Escolha um opção</option>
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                  </select>
                  {errors.select && <small>{errors.select}</small>}
                </FormControl>
              </InputGroup>
              <InputGroup theme={theme}>
                <FormControl
                  theme={theme}
                  className={errors.select ? "error" : ""}
                >
                  <label htmlFor="escolaridade">Escolaridade</label>
                  <select
                    className={`input ${errors.select ? "filling-error" : ""}`}
                    id="select"
                    name="escolaridade"
                  >
                    <option value="">Escolha um opção</option>
                    <option value="Ensino médio">Ensino médio</option>
                    <option value="superior completo">Superior completo</option>
                    <option value="superior incompleto">
                      Superior incompleto
                    </option>
                    <option value="pós graduação completa">Pós completa</option>
                    <option value="pós graduação incompleta">
                      Pós incompleta
                    </option>
                  </select>
                  {errors.select && <small>{errors.select}</small>}
                </FormControl>
                <FormControl
                  theme={theme}
                  className={errors.postcode ? "error" : ""}
                >
                  <label htmlFor="postcode">CEP</label>
                  <input
                    className={`input ${
                      errors.postcode ? "filling-error" : ""
                    }`}
                    id="postcode"
                    type="number"
                    name="postcode"
                    placeholder="00000-000"
                  />
                  {errors.postcode && <small>{errors.postcode}</small>}
                </FormControl>

                <FormControl
                  theme={theme}
                  className={errors.address ? "error" : ""}
                >
                  <label htmlFor="address">Endereço</label>
                  <input
                    className={`input ${errors.address ? "filling-error" : ""}`}
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Digite seu endereço"
                  />
                  {errors.address && <small>{errors.address}</small>}
                </FormControl>

                <FormControl
                  theme={theme}
                  className={errors.select ? "error" : ""}
                >
                  <label htmlFor="job">Primeiro emprego?</label>
                  <select
                    className={`input ${errors.select ? "filling-error" : ""}`}
                    id="select"
                    name="emprego"
                  >
                    <option value="">Escolha um opção</option>
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                  </select>
                  {errors.select && <small>{errors.select}</small>}
                </FormControl>
              </InputGroup>
            </InputGroups>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button label="Salvar" />
            </div>
          </FormContainer>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 20px 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  width: 95%;
  margin: 50px auto;
  padding: 25px;
  border-radius: 25px;
  border: 3px solid ${(props) => props.theme.bordercolor};
  background-color: ${(props) => props.theme.primary};
  font-size: 18px;
  color: #222222;
  & h1 {
    margin-bottom: 25px;
    color: ${(props) => props.theme.secondaryText};
    text-align: center;
  }
`;

const InputGroups = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  & label {
    color: #32aafa;
    margin-left: 15px;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;

const FormControl = styled.div`
  width: 100%;
  min-width: 300px;
  margin-bottom: 10px;
  & label {
    font-weight: 700;
    color: ${(props) => props.theme.primaryText};
    margin-left: 20px;
  }
  & input,
  & select {
    width: 100%;
    background-color: ${(props) => props.theme.tertiary};
    color: #222222;
    font-size: 16px;
    padding: 10px 15px;
    margin-top: 5px;
    border: 1px solid ${(props) => props.theme.bordercolor};
    border-radius: 25px;
    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.secondary};
    }
    &::placeholder {
      color: #222;
    }
  }
  & textarea {
    width: 100%;
    height: 150px;
    background: ${(props) => props.theme.tertiary};
    border: 1px solid ${(props) => props.theme.bordercolor};
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #222222;
    border-radius: 25px;
    padding: 20px;
    margin-top: 5px;
    resize: none;
    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.secondary};
    }
    &::placeholder {
      color: #222;
    }
  }
  & small {
    margin-left: 20px;
    visibility: hidden;
  }
  &.error small {
    visibility: visible;
    color: ${(props) => props.theme.error};
    font-size: 13px;
  }
  &.success small {
    visibility: hidden;
  }
  & .filling-error {
    border: 1px solid ${(props) => props.theme.error};
  }
  & .success-filling {
    border: 1px solid #159c32;
  }
`;
