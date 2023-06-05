import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerRH768 from "../assets/images/bannerRH-768px.png";
import BannerRH from "../assets/images/bannerRH.png";
import FotoMateriaCurriculo from "../assets/images/img-curriculo.png";
import FotoMateriaEntrevista from "../assets/images/img-entrevista.png";
import { SearchForm } from "../components/search-form/SearchForm";
import VideoPlayer from "../components/video-player/VideoPlayer";
import { Button } from "../components/buttons/button-default/Button";

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Container
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <ContentBox theme={theme}>
          <picture>
            <source
              width="100%"
              srcSet={BannerRH768}
              media="(max-width: 425px)"
            />
            <img width="100%" src={BannerRH} alt="banner informativo" />
          </picture>

          <SearchForm />
          <MainContainer theme={theme}>
            <PainelPrimary theme={theme}>
              <h2>Painel informativo</h2>
              <p>
                Aqui você encontra as melhores dicas para estar sempre
                preparado!
              </p>
            </PainelPrimary>
            <PainelContent>
              <VideoPlayer volume={0.5} />
              <ContainerDescription theme={theme}>
                <p>
                  A busca por uma vaga no mercado de trabalho costuma ser
                  bastante disputada. É assim nos mais diferentes segmentos e
                  tipos de cargos. Sempre que uma oportunidade aparece, inúmeras
                  pessoas se apresentam para trabalhar. Isso torna a missão dos
                  avaliadores ainda mais difícil. Muitas vezes, eles têm que
                  selecionar um único candidato entre uma série de profissionais
                  qualificados.
                </p>

                <p>
                  Se você busca seu primeiro emprego ou uma recolocação no
                  mercado de trabalho, clique no botão abaixo e cadastre-se em
                  nosso banco de talentos para poder se inscrever nas vagas.
                </p>
                <Link to="signup">
                  <MoreJobsButton theme={theme}>
                    <Button label="Cadastre-se" />
                  </MoreJobsButton>
                </Link>
              </ContainerDescription>
            </PainelContent>
          </MainContainer>

          <BlogContainer theme={theme}>
            <PainelSecondary theme={theme}>
              <h2>Principais Notícias</h2>
              <p>
                Acompanhe as principais notícias sobre emprego e mercado de
                trabalho.
              </p>
            </PainelSecondary>
            <BlogContent theme={theme}>
              <BlogWrapper theme={theme}>
                <img
                  src={FotoMateriaCurriculo}
                  alt="Imagem do blog - materia sobre curriculo"
                />
                <ResumeBox theme={theme}>
                  <Link to="blog">
                    <h3>A importância de um bom currículo</h3>
                    <p>
                      Nessa matéria conversamos com especialistas para sabermos
                      o que os candidatos podem fazer para estruturar bem seus
                      currículos e assim poderem chamar a atenção dos
                      recrutadores.
                    </p>
                  </Link>
                </ResumeBox>
              </BlogWrapper>
              <BlogWrapper theme={theme}>
                <img
                  src={FotoMateriaEntrevista}
                  alt="Imagem do blog - materia sobre entrevista"
                />
                <ResumeBox theme={theme}>
                  <Link to="blog">
                    <h3>Como se preparar para entrevista?</h3>
                    <p>
                      A Head Hunter Maria Pastora nos fala quais erros evitar no
                      momento de uma entrevista e como se preparar para melhorar
                      o aproveitamento dos candidatos nos processos seletivos.
                    </p>
                  </Link>
                </ResumeBox>
              </BlogWrapper>
            </BlogContent>
          </BlogContainer>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 20px 0;
  & h1 {
    color: ${(props) => props.theme.secondaryText};
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 30px;
  @media (max-width: 465px) {
    padding: 0 10px;
  }
`;

const PainelPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  & h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryText};
    font-weight: bold;
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
  & p {
    font-size: 22px;
    margin: 10px 0;
    color: ${(props) => props.theme.primaryText};
    @media (max-width: 465px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

const PainelContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 30px 0;
  & video {
    border-radius: 25px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ContainerDescription = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & p {
    color: ${(props) => props.theme.tertiaryText};
    font-size: 17px;
    line-height: 30px;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MoreJobsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogContainer = styled.section`
  padding: 0 60px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 55px;
  margin-bottom: 50px;
  @media (max-width: 465px) {
    padding: 0 10px;
  }
`;

const PainelSecondary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -15px;
  & h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryText};
    font-weight: bold;
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
  & p {
    font-size: 22px;
    margin: 10px 0;
    color: ${(props) => props.theme.primaryText};
    @media (max-width: 465px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

const BlogContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const BlogWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & img {
    width: 300px;
    height: 200px;
    border-radius: 25px;
    border: 1px solid #cccccc;
    cursor: pointer;
    @media (max-width: 465px) {
      width: 250px;
      height: auto;
    }
  }
  @media (max-width: 465px) {
    flex-wrap: wrap;
  }
`;

const ResumeBox = styled.div`
  & h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryText};
    cursor: pointer;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: ${(props) => props.theme.primaryText};
    margin-top: 5px;
    &:hover {
      color: ${(props) => props.theme.secondaryText};
    }
  }
`;
