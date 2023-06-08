import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme-context";
import medtecLogo from "../../assets/images/medtec-logo.png";
import devserLogo from "../../assets/images/devser-logo.png";
import mainservLogo from "../../assets/images/mainserv-logo.png";
import mobileSolutionsLogo from "../../assets/images/mobileSolutions-logo.png";
import boobleLogo from "../../assets/images/booble-logo.png";
import borcelleLogo from "../../assets/images/borcelle-logo.png";
import hanoverLogo from "../../assets/images/hanover-logo.png";
import shoppingLogo from "../../assets/images/shopping-logo.png";
import timmermanLogo from "../../assets/images/timmer-logo.png";

const logos = {
  MedTec: medtecLogo,
  DevSer: devserLogo,
  MainServ: mainservLogo,
  "Mobile Solutions": mobileSolutionsLogo,
  "Booble Inc.": boobleLogo,
  "Borcelle Tech": borcelleLogo,
  "Hanover Tecnologia": hanoverLogo,
  "Shopping Online": shoppingLogo,
  "Indústrias Timmerman": timmermanLogo,
};

export const JobDetails = ({ company }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MoreInfoWrapper theme={theme}>
      <MoreInfoBox theme={theme}>
        <MoreInfoContent theme={theme}>
          <img
            src={logos[company.name]}
            alt={`logo da empresa ${company.name}`}
          />
          <h4>{company.name}</h4>
          <span>Sobre a empresa:</span>
          <p>{company.description}</p>
          <span>Descrição da vaga:</span>
          <p>{company.jobDescription}</p>
          <span>Requisitos da vaga:</span>
          <p>{company.jobRequirements}</p>
          <span>O que oferecemos:</span>
          <p>{company.benefits}</p>
        </MoreInfoContent>
      </MoreInfoBox>
    </MoreInfoWrapper>
  );
};

const MoreInfoWrapper = styled.div`
  color: ${(props) => props.theme.secondaryText};
`;

const MoreInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const MoreInfoContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  gap: 10px;
  padding: 25px;
  border-radius: 25px;
  & img {
    width: 100px;
    align-self: center;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 50%;
  }
  & h4 {
    font-size: 32px;
    text-align: center;
    color: ${(props) => props.theme.tertiaryText};
    margin-bottom: 15px;
  }
  & span {
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryText};
  }
  & p {
    font-size: 13px;
    color: ${(props) => props.theme.white};
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
