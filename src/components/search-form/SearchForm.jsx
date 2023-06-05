import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../buttons/button-default/Button";

export const SearchForm = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SearchContainer
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <h2>Encontre sua vaga</h2>
        <FormContainer theme={theme}>
          <input
            type="text"
            name="job"
            placeholder="Digite o cargo"
            theme={theme}
          />
          <SelectItem theme={theme}>
            <option value="">Estados</option>
            <option value="Acre">Acre (AC)</option>
            <option value="Alagoas">Alagoas (AL)</option>
            <option value="Amapá">Amapá (AP)</option>
            <option value="Amazonas">Amazonas (AM)</option>
            <option value="Bahia">Bahia (BA)</option>
            <option value="Ceará">Ceará (CE)</option>
            <option value="Distrito Federal">Distrito Federal (DF)</option>
            <option value="Espírito Santo">Espírito Santo (ES)</option>
            <option value="Goiás">Goiás (GO)</option>
            <option value="Maranhão">Maranhão (MA)</option>
            <option value="Mato Grosso">Mato Grosso (MT)</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul (MS)</option>
            <option value="Minas Gerais">Minas Gerais (MG)</option>
            <option value="Pará">Pará (PA)</option>
            <option value="Paraíba">Paraíba (PB)</option>
            <option value="Paraná">Paraná (PR)</option>
            <option value="Pernambuco">Pernambuco (PE)</option>
            <option value="Piauí">Piauí (PI)</option>
            <option value="Rio de Janeiro">Rio de Janeiro (RJ)</option>
            <option value="Rio Grande do Norte">
              Rio Grande do Norte (RN)
            </option>
            <option value="Rio Grande do Sul">Rio Grande do Sul (RS)</option>
            <option value="Rondônia">Rondônia (RO)</option>
            <option value="Roraima">Roraima (RR)</option>
            <option value="Santa Catarina">Santa Catarina (SC)</option>
            <option value="São Paulo">São Paulo (SP)</option>
            <option value="Sergipe">Sergipe (SE)</option>
            <option value="Tocantins">Tocantins (TO)</option>
          </SelectItem>
          <SelectItem theme={theme}>
            <option value="">Tipo de vaga</option>
            <option value="todos">Todos</option>
            <option value="clt-remoto">CLT - Remoto</option>
            <option value="clt-presencial">CLT - Presencial</option>
            <option value="pj">PJ</option>
          </SelectItem>

          <Link to="signup">
            <Button label="Pesquisar" />
          </Link>
        </FormContainer>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.section`
  width: 100%;
  margin-top: 10px;
  padding: 40px;
  border-radius: 25px;
  font-size: 18px;
  @media (max-width: 465px) {
    padding: 10px;
  }
  & h2 {
    margin-left: 15px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.primaryText};
    font-size: 46px;
    @media (max-width: 465px) {
      font-size: 34px;
    }
    @media (max-width: 375px) {
      font-size: 30px;
    }
    @media (max-width: 320px) {
      font-size: 24px;
    }
  }
`;

const FormContainer = styled.form`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  & input {
    width: 100%;
    background-color: ${(props) => props.theme.tertiary};
    border: 1px solid ${(props) => props.theme.bordercolor};
    font-size: 16px;
    font-weight: 300;
    padding: 10px 15px;
    border-radius: 25px;
    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.secondary};
    }
    &::placeholder {
      color: #222;
    }
  }
  @media (max-width: 465px) {
    flex-wrap: wrap;
  }
`;

const SelectItem = styled.select`
  width: 100%;
  background-color: ${(props) => props.theme.tertiary};
  border: 1px solid ${(props) => props.theme.bordercolor};
  font-size: 16px;
  font-weight: 300;
  color: #222;
  padding: 10px 15px;
  border-radius: 25px;
  &:focus-visible {
    outline: 1px solid #32aafa;
  }
`;
