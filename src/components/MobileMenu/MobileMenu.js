/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.3s;
`;

const slideInFromRight = keyframes`
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  `;

const Content = styled(DialogContent)`
  --overfill: 16px;
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(-1 * var(--overfill));
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: ${slideInFromRight} 0.3s both cubic-bezier(0.57, 0.21, 0.64, 1.14);
  animation-delay: 0.2s;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 0px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  animation: ${fadeIn} 1.5s both;
  animation-delay: 0.4s;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;

  animation: ${fadeIn} 1.5s both;
  animation-delay: 0.6s;
`;

export default MobileMenu;
