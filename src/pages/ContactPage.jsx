import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";
import { Button } from "../components/buttons/button-default/Button";

export const ContactPage = () => {
  const { theme } = useContext(ThemeContext);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const inputText = form.querySelectorAll(".input");
    const select = form.querySelector("#select");
    const textarea = form.querySelector("#message");

    const newErrors = {};

    inputText.forEach((input) => {
      if (input.value === "") {
        newErrors[input.name] = "Campo obrigatório!";
      }
    });

    if (select.value === "") {
      newErrors.select = "Campo obrigatório!";
    }

    if (textarea.value === "") {
      newErrors.textarea = "Campo obrigatório!";
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
          <FormContainer id="form" onSubmit={handleSubmit} theme={theme}>
            <h1>Contato</h1>
            <FormControl theme={theme} className={errors.name ? "error" : ""}>
              <label htmlFor="name">Nome</label>
              <input
                className={`input ${errors.name ? "filling-error" : ""}`}
                id="name"
                type="text"
                name="name"
                placeholder=" Insira seu nome completo"
              />
              {errors.name && <small>{errors.name}</small>}
            </FormControl>

            <FormControl theme={theme} className={errors.email ? "error" : ""}>
              <label htmlFor="email">E-mail</label>
              <input
                className={`input ${errors.email ? "filling-error" : ""}`}
                id="email"
                type="email"
                name="email"
                placeholder=" Insira um email válido"
              />
              {errors.email && <small>{errors.email}</small>}
            </FormControl>

            <FormControl theme={theme} className={errors.phone ? "error" : ""}>
              <label htmlFor="phone">Telefone</label>
              <input
                className={`input ${errors.phone ? "filling-error" : ""}`}
                id="phone"
                type="tel"
                name="phone"
                placeholder=" (00) 00000-0000"
              />
              {errors.phone && <small>{errors.phone}</small>}
            </FormControl>

            <FormControl theme={theme} className={errors.select ? "error" : ""}>
              <label htmlFor="select">Assunto</label>
              <select
                className={`input ${errors.select ? "filling-error" : ""}`}
                id="select"
                name="select"
              >
                <option value="">Selecione</option>
                <option value="Duvida">Dúvida</option>
                <option value="Reclamacao">Reclamação</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.select && <small>{errors.select}</small>}
            </FormControl>

            <FormControl
              theme={theme}
              className={errors.textarea ? "error" : ""}
            >
              <label htmlFor="message">Descrição</label>
              <textarea
                className={`input ${errors.textarea ? "filling-error" : ""}`}
                id="message"
                placeholder="Deixe sua mensagem aqui"
              ></textarea>
              {errors.textarea && <small>{errors.textarea}</small>}
            </FormControl>
            <MoreJobsButton theme={theme}>
              <Button label="Enviar" />
            </MoreJobsButton>
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
  width: 500px;
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
  @media (max-width: 465px) {
    width: 400px;
  }
  @media (max-width: 375px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;

const FormControl = styled.div`
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

const MoreJobsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
