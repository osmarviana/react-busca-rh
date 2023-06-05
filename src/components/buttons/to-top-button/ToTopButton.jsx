import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../../context/theme-context";
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const ToTopButton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ContainerButtonToTop
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <ButtonToTop theme={theme}>
          <BsFillArrowUpCircleFill theme={theme} />
        </ButtonToTop>
      </ContainerButtonToTop>
    </>
  );
};

const ContainerButtonToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 30px;
`;

const ButtonToTop = styled.button`
  font-size: 30px;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  margin-bottom: 20px;
`;
