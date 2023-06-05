import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme-context";
import Logo from "../../assets/images/logo-busca-rh.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ContainerFooter
        theme={theme}
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <FooterWrapper theme={theme}>
          <FooterBox theme={theme}>
            <CompanyFooter theme={theme}>
              <img src={Logo} alt="Logo Busca RH" />
              <h2>Busca RH</h2>
              <p>A busca do emprego certo é aqui.</p>
            </CompanyFooter>
          </FooterBox>
          <FooterBox theme={theme}>
            <ArticlesFooter theme={theme}>
              <h2>Últimas Notícias</h2>
              <FooterList theme={theme}>
                <Link to="blog">
                  <li>A importância de um bom currículo</li>
                </Link>
                <Link to="blog">
                  <li>Como se preparar para entrevista?</li>
                </Link>
                <Link to="blog">
                  <li>Quais erros devo evitar durante uma entrevista?</li>
                </Link>
              </FooterList>
            </ArticlesFooter>
          </FooterBox>
          <FooterBox theme={theme}>
            <h2>Acesse nossas redes</h2>
            <FooterList theme={theme}>
              <li className="hoverable">
                <Link to="https://pt-br.facebook.com" target="_blank">
                  <BsFacebook style={{ color: theme.primaryText }} />
                  <span>Facebook</span>
                </Link>
              </li>
              <li className="hoverable">
                <Link to="https://www.instagram.com" target="_blank">
                  <BsInstagram style={{ color: theme.primaryText }} />
                  <span>Instagram</span>
                </Link>
              </li>
              <li className="hoverable">
                <Link to="https://br.linkedin.com" target="_blank">
                  <BsLinkedin style={{ color: theme.primaryText }} />
                  <span>Linkedin</span>
                </Link>
              </li>
            </FooterList>
          </FooterBox>
          <FooterBottom theme={theme}>
            <p>Osmar Viana - 2023 ©</p>
          </FooterBottom>
        </FooterWrapper>
      </ContainerFooter>
    </>
  );
};

const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border-top: 3px solid ${(props) => props.theme.tertiary};
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FooterBox = styled.div`
  width: 31%;
  padding: 1%;
  & h2 {
    margin-bottom: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.secondaryText};
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CompanyFooter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 80px;
    margin-bottom: 10px;
  }
`;

const ArticlesFooter = styled.div`
  color: ${(props) => props.theme.secondaryText};
  & li {
    margin-bottom: 15px;
    transition: 0.5s;
    color: ${(props) => props.theme.primaryText};
    &:hover {
      color: ${(props) => props.theme.secondaryText};
    }
  }
`;

const FooterList = styled.ul`
  width: 100%;
  & li {
    margin-bottom: 15px;
    color: ${(props) => props.theme.primaryText};
    transition: 0.5s;
    @media (max-width: 768px) {
      text-align: center;
    }
    & span {
      margin-left: 5px;
      font-weight: 500;
      transition: 0.5s;
      color: ${(props) => props.theme.primaryText};
      &:hover {
        color: ${(props) => props.theme.secondaryText};
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.tertiary};
  & p {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
`;
