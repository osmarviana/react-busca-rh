import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FotoMateriaCurriculo from "../assets/images/img-curriculo.png";
import FotoMateriaEntrevista from "../assets/images/img-entrevista.png";
import LinkedinIMG from "../assets/images/dicas-linkedin.jpg";
import EmpresasIMG from "../assets/images/empresas-contratam.jpg";
import AreasTiIMG from "../assets/images/melhores-areas-de-TI.jpg";
import CursosIMG from "../assets/images/cursos.jpg";

export const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Container
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <ArticlesSection theme={theme}>
          <BoxArcticle theme={theme}>
            <h2>A importância de um bom currículo</h2>
            <span className="one">Autor: João da Silva</span>
            <img
              className="first"
              src={FotoMateriaCurriculo}
              alt="imagem da materia sobre curriculo"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              quia excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti velit dolorum.
              Totam, officiis hic. Culpa nulla, quibusdam, cumque nostrum
              tempora maxime voluptas inventore a sunt quae ea.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Itaque quia excepturi
              deleniti.
              <br />
              Dolor sit amet, consectetur adipisicing elit. Itaque quia
              excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Itaque quia
              excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti velit dolorum.
              Totam, officiis hic. Culpa nulla, quibusdam, cumque nostrum
              tempora maxime voluptas inventore a sunt quae ea.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Itaque quia excepturi
              deleniti.
              <br />
              Itaque quia excepturi deleniti velit dolorum. Totam, officiis hic.
              Culpa nulla, quibusdam, cumque nostrum tempora maxime voluptas
              inventore a sunt quae ea.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti.
            </p>
          </BoxArcticle>
          <BoxArcticle theme={theme}>
            <h2>Como se preparar para entrevista?</h2>
            <span className="two">Autora: Maria dos Santos</span>
            <img
              className="second"
              src={FotoMateriaEntrevista}
              alt="imagem da materia sobre entrevista"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              quia excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti velit dolorum.
              Totam, officiis hic. Culpa nulla, quibusdam, cumque nostrum
              tempora maxime voluptas inventore a sunt quae ea.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Itaque quia excepturi
              deleniti.
              <br />
              Dolor sit amet, consectetur adipisicing elit. Itaque quia
              excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Itaque quia
              excepturi deleniti velit dolorum. Totam, officiis hic. Culpa
              nulla, quibusdam, cumque nostrum tempora maxime voluptas inventore
              a sunt quae ea. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti velit dolorum.
              Totam, officiis hic. Culpa nulla, quibusdam, cumque nostrum
              tempora maxime voluptas inventore a sunt quae ea.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Itaque quia excepturi
              deleniti.
              <br />
              Itaque quia excepturi deleniti velit dolorum. Totam, officiis hic.
              Culpa nulla, quibusdam, cumque nostrum tempora maxime voluptas
              inventore a sunt quae ea.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque quia excepturi deleniti.
            </p>
          </BoxArcticle>
        </ArticlesSection>

        <Sidebar theme={theme}>
          <h2>Mais notícias</h2>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            emulateTouch={true}
            swipeable={true}
            width="100%"
            dynamicHeight={false}
            className="carousel"
          >
            <div>
              <Link to="blog">
                <img src={LinkedinIMG} alt="" />
                <p>5 dicas para deixar seu Linkedin atraente</p>
              </Link>
            </div>
            <div>
              <Link to="blog">
                <img src={EmpresasIMG} alt="" />
                <p>Veja as empresas que mais contratam no Brasil</p>
              </Link>
            </div>
            <div>
              <Link to="blog">
                <img src={AreasTiIMG} alt="" />
                <p>Quais as áreas de TI mais procuradas?</p>
              </Link>
            </div>
            <div>
              <Link to="blog">
                <img src={CursosIMG} alt="" />
                <p>
                  Quer aprender a programar? Conheça alguns cursos gratuitos.
                </p>
              </Link>
            </div>
          </Carousel>
        </Sidebar>
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArticlesSection = styled.section``;

const BoxArcticle = styled.article`
  padding: 30px;
  &:not(:last-child) {
    border-bottom: 2px solid ${(props) => props.theme.tertiary};
  }
  & h2 {
    text-transform: uppercase;
    font-size: 26px;
    color: ${(props) => props.theme.secondaryText};
    margin-bottom: 30px;
    text-align: center;
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
  & img {
    width: 400px;
    border-radius: 25px;
    margin-bottom: 5px;
    border: 2px solid #22222250;
    &.first {
      margin-right: 25px;
      float: left;
      @media (max-width: 768px) {
        margin-right: 0;
        float: none;
      }
    }
    &.second {
      margin-left: 25px;
      float: right;
      @media (max-width: 768px) {
        margin-left: 0;
        float: none;
      }
    }
    @media (max-width: 375px) {
      width: 350px;
    }
    @media (max-width: 320px) {
      width: 300px;
    }
  }
  & span {
    font-size: 14px;
    color: ${(props) => props.theme.primaryText};
    margin-bottom: 5px;
    &.two {
      text-align: right;
    }
  }
  & p {
    line-height: 30px;
    font-family: sans-serif;
    text-align: justify;
    color: ${(props) => props.theme.tertiaryText};
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Sidebar = styled.aside`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-size: 28px;
    margin-bottom: 30px;
  }
  & img {
    width: 350px;
    height: 250px;
    margin-bottom: 20px;
  }
  & p {
    font-size: 18px;
    color: ${(props) => props.theme.tertiaryText};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
