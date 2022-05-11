import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ href, text }) => {
  return (
    <Wrapper href={href}>
      <Top>{text}</Top>
      <Bottom>{text}</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.div`
  transform: translateY(var(--from));
  will-change: transform; // can use since there's only a few menu items

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s;

    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transition: transform 0.1s;
      transform: translateY(var(--to));
    }
  }
`;

const Top = styled(Text)`
  position: relative;

  --from: 0%;
  --to: -100%;
`;

const Bottom = styled(Text)`
  position: absolute;
  left: 0;
  top: 0;
  font-weight: ${WEIGHTS.bold};

  --from: 100%;
  --to: 0%;
`;

export default NavLink;
