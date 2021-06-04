import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
const BidStyle = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  max-width: 240px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  & .bidsvg {
    color: rgba(255, 255, 255, 0.5);
  }
  & .bidtext {
    text-decoration: none;
  }
`;
export const NotFoundBid = (props) => {
  return (
    <BidStyle>
      <Content>
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
          <NFTText
            fontWeight=" 400"
            color="rgba(255, 255, 255, 0.5)"
            margin=" 8px 0px 0px"
            fontSize="18px"
            fontWeight="500"
          >
            No active bids yet. Be the first to make a bid1
          </NFTText>
        </div>
      </Content>
    </BidStyle>
  );
};
