import React from "react";

import styled, { css } from "styled-components";

import { Link } from "react-router-dom";


const Nav = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.backgroundGray};
    width: 100%;
    color: ${theme.colors.white};
  `}
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  padding-left: 20rem; // espaço lado trocar
`;


const Li = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a{
    list-style-type: none;
    text-decoration: none;
    color: white;
    font-size: 1.2em;
  }                             // add hover futuramente e detalhes
`;

const Menu = () => (
  <Nav>
    <NavMenu>
      <Li>
        <Link to="/">
          Registrar
        </Link>
      </Li>
      <Li>
        <Link to="/Painel">
          Painel
        </Link>
      </Li>
      <Li>
        <Link to="/Painel/NewLead">
          Novo Lead
        </Link>
      </Li>
    </NavMenu>
  </Nav>
);

export default Menu;
