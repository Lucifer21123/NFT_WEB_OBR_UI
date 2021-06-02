import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftFrom = styled.div`
  width: 380px;
`;
export const RightForm = styled.div``;

export const ConnectWrapper = styled.div`
  margin: 0px;
  padding: 32px 0px;
`;
export const ConnectBody = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
`;
export const WalletCardGroup = styled.div`
  margin: 32px 0px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-auto-rows: auto;
  gap: 16px;
`;
export const WhatButton = styled.button`
  color: rgb(45, 129, 255);
  fontweight: 500;
  background: transparent;
  border-color: transparent;
  &:hover {
    color: white;
  }
`;
