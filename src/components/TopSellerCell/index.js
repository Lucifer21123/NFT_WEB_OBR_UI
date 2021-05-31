import React, { useState } from 'react';
import styled from 'styled-components';

const SellerCellArea = styled.div`
  display: flex;
  flex-direction: row nowrap;
  width: 100%;
  width: 255px;
  height: 48px;
  span {
    font-size: 14px;
    line-height: 19.32px;
  }
  img {
    width: 48px;
    height: 48px;
  }
`;

const SellerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 15px;
    line-height: 20.7px;
    font-weight: 900;
    color: rgb(255, 255, 255);
  }
  p {
    font-size: 14px;
    line-height: 20.7px;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SellerCell = ({ number, src, seller, price }) => {
  return (
    <SellerCellArea>
      <span>{number}</span>
      <img src={src} />
      <SellerTextContainer>
        <span>{seller}</span>
        <p>{price}ETH</p>
      </SellerTextContainer>
    </SellerCellArea>
  );
};
export default SellerCell;
