import React, { useState } from 'react';
import SellerCell from '../TopSellerCell/index';
import styled from 'styled-components';

const TopSellerContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-flow: row nowrap;
  overflow-x: scroll;
  padding: 0px 0px 0px 20px;
`;

const TopSellerGridArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SellerColumn = ({ data }) => {
  return (
    <TopSellerGridArea>
      {data.map((item, key) => {
        return (
          <SellerCell
            key={key}
            src={item.src}
            number={item.number}
            seller={item.seller}
            price={item.price}
          />
        );
      })}
    </TopSellerGridArea>
  );
};

const SellerCellGrid = ({ data }) => {
  let t = 0;
  let i = 0;
  let temp = data;
  let template = temp.map((item, key) => {
    let arr = [];
    i++;
    if (i % 3 == 0) {
      arr = data.slice(t, i);
      t = i;
      return <SellerColumn data={arr} key={i} />;
    }
  });
  return (
    <TopSellerContainer className="nft-scrollbar">
      {template}
    </TopSellerContainer>
  );
};

export default SellerCellGrid;
