import React, { useState } from 'react';
import SellerCell from '../TopSellerCell/index';
import styled from 'styled-components';

const TopSellerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
`;

const TopSellerGridArea = styled.div`
  display: flex;
  flex-direction: column;
`;

  return (
    <TopSellerContainer>
      <TopSellerGridArea></TopSellerGridArea>
    </TopSellerContainer>
  );
};

export default SellerCellGrid;
