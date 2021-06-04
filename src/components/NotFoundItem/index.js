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
      <NFTText>No items found</NFTText>
      <NFTText>Come back soon! Or try to browse</NFTText>
      <NFTText>something for you on our marketplace</NFTText>
      <Button varient="lightblue">Browse marketplace</Button>
    </ItemStyle>
  );
};
