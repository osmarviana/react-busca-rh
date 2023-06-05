import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/theme-context";

export const Button = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <ButtonDefault theme={theme}>{props.label}</ButtonDefault>
      </div>
    </>
  );
};


const ButtonDefault = styled.button`
  padding: 10px 30px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.tertiaryText};
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    opacity: 0.9;
  }
`;
