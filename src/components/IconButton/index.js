import React from 'react';
import styled from 'styled-components';
const IconStyle = styled.button`
  outline:none;
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  outline: none,
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.12s ease-in-out 0s;
  border-radius: 40px;
  background-color: rgba(45, 129, 255, 0.05);
  transform-origin: center center;
  & :focus: {
    outline: 'none',
  },
  & :active: { 
    transform: 'scale(0.95)' 
  },
  transition: 'all 0.3s ease',
`;
export const IconButton = (props) => {
  return (
    <IconStyle>
      <svg
        viewBox="0 0 12 16"
        fill="none"
        width="15"
        height="15"
        xlmns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </IconStyle>
  );
};
