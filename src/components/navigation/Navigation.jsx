import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-busca-rh.png";
import styled from "styled-components";
import { ThemeSwitchButton } from "../buttons/switch-button/ThemeSwitchButton";
import { ThemeContext } from "../../context/theme-context";
import { Footer } from "../footer/Footer";

export const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <Container
        style={{ color: theme.secondaryText, backgroundColor: theme.primary }}
      >
        <Link to="/">
          <img src={Logo} alt="Logo Busca RH" />
        </Link>
        <NavMenu theme={theme} className={isMenuActive ? "active" : ""}>
          <ul className={`main-ul ${isMenuActive ? "active" : ""}`}>
            <NavLink to="/" currentPath={location.pathname} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/contact"
              currentPath={location.pathname}
              onClick={closeMenu}
            >
              Contato
            </NavLink>
            <NavLink
              to="/register"
              currentPath={location.pathname}
              onClick={closeMenu}
            >
              Cadastre-se
            </NavLink>
            <NavLink
              to="/signup"
              currentPath={location.pathname}
              onClick={closeMenu}
            >
              Inscreva-se
            </NavLink>
          </ul>
          <ThemeSwitchButton />
          <MenuBurger
            className={`menu-burger ${isMenuActive ? "active" : ""}`}
            onClick={toggleMenu}
            theme={theme}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuBurger>
        </NavMenu>
      </Container>

      <Outlet />
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  & img {
    width: 100px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  & ul {
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
      width: 100%;
      display: none;
      text-align: center;
      flex-direction: column;
      position: absolute;
      top: 115px;
      background-color: ${(props) => props.theme.primary};
      transition: 0.3s;
      &.active {
        display: block;
        left: 0;
        height: 100%;
      }
    }
    & li {
      color: ${(props) => props.theme.secondaryText};
      font-size: 18px;
      font-weight: 700;
      transition: 0.3s;
      padding: 5px 10px;
      border-radius: 25px;
      @media (max-width: 768px) {
        border-radius: 0;
      }
      &:hover {
        color: ${(props) => props.theme.primaryText};
      }
      &.active {
        color: ${(props) => props.theme.tertiaryText};
        background-color: ${(props) => props.theme.secondary};
      }
      @media (max-width: 768px) {
        margin: 16px 0;
      }
    }
  }
`;

const MenuBurger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    &.active span:nth-child(2) {
      opacity: 0;
    }
    &.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  & span {
    display: block;
    width: 28px;
    height: 3px;
    border-radius: 2px;
    margin: 5px auto;
    background-color: ${(props) => props.theme.primaryText};
    transition: all 0.3s ease-in-out;
  }
`;

const NavLink = ({ to, currentPath, children, onClick }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to}>
      <li
        className={isActive ? "nav-item active" : "nav-item"}
        onClick={onClick}
      >
        {children}
      </li>
    </Link>
  );
};
