import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import useToken from '../utils/useToken';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid #09d3ac;
`;

const StyledLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  color: #09d3ac;
`;

const StyledImg = styled.img`
  width: 5%;
  margin: 0 1rem;
`;

const RightSide = styled.div`
  margin-left: auto;
`;

function Navbar() {
  const { token } = useToken();
  let menu;

  if (token.length > 0) {
    menu = (
      <StyledNavbar>
        <StyledImg src={logo} alt="logo" />
        <StyledLink to="/">Home</StyledLink>
      </StyledNavbar>
    );
  } else {
    menu = (
      <StyledNavbar>
        <StyledImg src={logo} alt="logo" />
        <StyledLink to="/">Home</StyledLink>
        <RightSide>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </RightSide>
      </StyledNavbar>
    );
  }

  return menu;
}

export default Navbar;
