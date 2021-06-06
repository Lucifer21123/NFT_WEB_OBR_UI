import styled from 'styled-components';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import React from 'react';
const ArrowContainer = styled.div`
  position: absolute;
  left: calc(-5px + ${(props) => props.arrowPosition});
  top: calc(50% - 16px);
  border-radius: 50%;
  background: rgb(18, 18, 18);
  color: rgba(255, 255, 255, 0.8);
  width: 47px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.18);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const PrevArrow = (props) => {
  return (
    <ArrowContainer onClick={props.onClick} arrowPosition={props.arrowPosition}>
      <HiOutlineChevronDoubleLeft color="#ABB1BB" />
    </ArrowContainer>
  );
};

export default PrevArrow;
