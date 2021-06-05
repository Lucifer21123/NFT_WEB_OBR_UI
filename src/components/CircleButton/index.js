import React from 'react';
import styled from 'styled-components';
const IconStyle = styled.button`
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  height: 40px;
  width: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  transform-origin: center;
  margin: 0px 0px 0px 8px;
  &:focus {
    outline: none;
  }
  &:active {
    transform: 'scale(0.95)';
  }
  transition: all 0.3s ease;
`;
export const CircleButton = (props) => {
  return (
    <IconStyle className={props.className || ''} onClick={props.onClick}>
      {props.children}
    </IconStyle>
  );
};
