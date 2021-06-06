import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;

  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};

  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
  line-height: 48px;
  height: 48px;
  padding-left: 26.4px;
  padding-right: 26.4px;
  min-width: 192px;
  border: 1px solid transparent;

  align-items: center;

  justify-content: center;
  border-radius: 48px;
  font-size: 15px;
  font-weight: 900;
  font-family: inherit;
  transition: all 0.12s ease-in-out 0s;
  transform-origin: center center;
  user-select: none;
  cursor: pointer;
  background: rgb(18, 18, 18);
  color: white;
  position: relative;
  margin: 4px;

  :before {
    content: '';
    position: absolute;
    inset: 0px;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      rgb(12, 80, 255) 0%,
      rgb(12, 80, 255) 24%,
      rgb(91, 157, 255) 55.73%,
      rgb(255, 116, 241) 75%,
      rgb(255, 116, 241) 100%
    );
  }
  :hover {
    border: 5px;
  }
`;

const GradientButton = ({ onClick, toggle, children }) => {
  console.log(toggle);
  return (
    <StyledButton onClick={onClick} toggle={toggle}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;
