import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";
import { SearchForm } from "../components/search-form/SearchForm";
import { JobItem } from "../components/job-item/JobItem";
import { Button } from "../components/buttons/button-default/Button";
import { GrCircleAlert } from "react-icons/gr";

async function getJobList() {
  const response = await fetch("/json/job-list-details.json");
  return await response.json();
}

export const SignUpPage = () => {
  const { theme } = useContext(ThemeContext);

  const [joblist, setJoblist] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(5);

  const loadMoreJobs = () => {
    const newVisibleJobs = visibleJobs + 5;
    setVisibleJobs(newVisibleJobs);
  };

  const hasMoreJobs = visibleJobs < joblist.length;

  useEffect(() => {
    async function fetchData() {
      const joblist = await getJobList();
      setJoblist(joblist.jobListDetails);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <SearchForm />

        <JobSection id="lastjobs-container" theme={theme}>
          <h2>Últimas vagas lançadas</h2>
          <Accordion id="accordion" theme={theme}>
            <nav>
              <ul>
                {joblist.slice(0, visibleJobs).map((job, index) => (
                  <li key={index}>
                    <JobItem
                      company={job.company}
                      location={job.location}
                      jobType={job.jobType}
                      theme={theme}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </Accordion>
          <MoreJobsButton theme={theme}>
            {hasMoreJobs ? (
              <Button label="+ Vagas" onClick={loadMoreJobs} />
            ) : (
              <p>
                <StyledCircleAlert theme={theme} />
                Todas as vagas foram carregadas.
              </p>
            )}
          </MoreJobsButton>
        </JobSection>
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 20px 0;
`;

const JobSection = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 30px;
  & h2 {
    font-size: 34px;
    font-weight: 700;
    text-align: center;
  }
`;

const Accordion = styled.div`
  width: 100%;
  height: 100%;
  & nav {
    width: 100%;
  }
  & ul {
    width: 100%;
    margin-top: 0;
  }
  & li {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid ${(props) => props.theme.bordercolor};
  }
`;

const MoreJobsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 14px;
    color: ${(props) => props.theme.error};
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledCircleAlert = styled(GrCircleAlert)`
  & path {
    stroke: ${(props) => props.theme.error};
  }
`;
