import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};

  ${({ menu }) => 
    menu && 
    css`
      ${tw`
        text-white
        text-lg
        mb-3
        focus:text-white
      `};
  `};
`;


export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#">About Us</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Our Fleet</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Instant Estimate</a>
          </NavItem>
        </ListContainer>
      </Menu>
    )
 

  return (
      <ListContainer>
        <NavItem>
          <a href="#">Home</a>
        </NavItem>
        <NavItem>
          <a href="#">About Us</a>
        </NavItem>
        <NavItem>
          <a href="#">Our Fleet</a>
        </NavItem>
        <NavItem>
          <a href="#">Services</a>
        </NavItem>
        <NavItem>
          <a href="#">Instant Estimate</a>
        </NavItem>
      </ListContainer>
  )
}