import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(18, 18, 18);
  min-height: 100vh;
`;
export const LeftFrom = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 380px;
  }
  background-image: url('https://rarible.com/static/3bd3dce3665cb2869ec24c0c38a8e086.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 32px;
  justify-content: space-between;
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
  & .headertext {
    font-size: 36px;
    font-weight: 900;
    margin: 20px 0 10px 0;
    text-align: left;
    font-family: Helvetica;
  }
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
