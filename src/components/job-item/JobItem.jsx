import React, { useState } from "react";
import styled from "styled-components";
import { MdPinDrop } from "react-icons/md";
import { JobDetails } from "../job-details/JobDetails";

export const JobItem = ({ company, location, jobType, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <JobList theme={theme}>
        <CompanyBox theme={theme}>
          <CompanyInfo theme={theme}>
            <h3>{company.jobTitle}</h3>
            <p>{company.name}</p>
          </CompanyInfo>
        </CompanyBox>
        <CompanyLocation theme={theme}>
          <MdPinDrop />
          <p>{location}</p>
        </CompanyLocation>
        <JobType theme={theme}>
          <span>{jobType}</span>
        </JobType>
        <Info theme={theme}>
          <p onClick={handleToggleDetails}>
            {isOpen ? "Fechar detalhes" : "Ver detalhes"}
          </p>
        </Info>
      </JobList>
      {isOpen && <JobDetails company={company} theme={theme} />}
    </>
  );
};

const JobList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.bordercolor};
  padding: 15px;
  @media (max-width: 425px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const CompanyBox = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const CompanyInfo = styled.div`
  & h3 {
    font-size: 16px;
    text-align: center;
  }
  & p {
    font-size: 14px;
    text-align: center;
    color: ${(props) => props.theme.primaryText};
  }
`;

const CompanyLocation = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 16px;
    margin-left: 10px;
    color: ${(props) => props.theme.secondaryText};
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const JobType = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.secondaryText};
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.secondaryText};
    cursor: pointer;
    transition: 0.3s ease;
    user-select: none;
    &:hover {
      color: ${(props) => props.theme.primaryText};
    }
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
