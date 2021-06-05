import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
import { Button } from '../Button';
const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  & .bidtext {
    text-decoration: none;
    color: inheit;
  }
`;

export const NotFoundItem = (props) => {
  return (
    <ItemStyle>
      <NFTText fontSize=" 26px" margin="8px 0px 0px">
        No items found
      </NFTText>
      <NFTText
        fontSize="18px"
        fontWeight="500"
        align=" center"
        color="rgba(255, 255, 255, 0.5)"
        margin="8px 0px 0px"
      >
        Come back soon! Or try to browse
      </NFTText>
      <NFTText
        fontSize="18px"
        fontWeight="500"
        align=" center"
        color="rgba(255, 255, 255, 0.5)"
        margin="8px 0px 16px 0px"
      >
        something for you on our marketplace
      </NFTText>
      <Button variant="lightBlue">Browse marketplace</Button>
    </ItemStyle>
  );
};
