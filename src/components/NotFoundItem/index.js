import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
const ItemStyle = styled.div`
  inset: 0px;
  z-index: 1;
  height: 100%;
  position: relative;
  background: rgb(18, 18, 18);
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
`;
export const NotFoundItem = (props) => {
  return (
    <ItemStyle>
      <div className="bidsvg">
        <svg
          viewBox="0 0 12 16"
          fill="none"
          width="38"
          height="38"
          xlmns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="bidtext">
        <NFTText>No active bids yet. Be the first to make a bid1</NFTText>
      </div>
    </ItemStyle>
  );
};
