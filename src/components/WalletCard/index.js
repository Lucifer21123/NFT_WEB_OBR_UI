import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px 24px 20px 24px;
  cursor: pointer;
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
  max-width: 100%;
  -webkit-box-flex: 1;
`;
const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
const Ribbon = styled.button`
  position: absolute;
  top: -15px;
  right: 0px;
  z-index: 10;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  height: 32px;
  background: transparent;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 32px;
  border: 2px solid transparent;
  background: rgb(255, 255, 255);
  color: rgb(18, 18, 18);
  margin: 2px;
`;

const WalletCard = (props) => {
  return (
    <CustomCard>
      {props.text ? (
        <Ribbon>
          <NFTText
            margin="10px 0px"
            color="black"
            fontSize="15px"
            fontWeight="500"
          >
            {props.text}
          </NFTText>
        </Ribbon>
      ) : (
        <></>
      )}
      <IconGroup>
        <img
          alt="Torus"
          src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmXLbNfhbQc16vMczeZEiPktio9iAhXGirvJVqSmihQ5C2&w=100"
          width="28"
          height="28"
        />
        <img
          alt="Torus"
          src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmXLbNfhbQc16vMczeZEiPktio9iAhXGirvJVqSmihQ5C2&w=100"
          width="28"
          height="28"
        />
        <img
          alt="Torus"
          src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmXLbNfhbQc16vMczeZEiPktio9iAhXGirvJVqSmihQ5C2&w=100"
          width="28"
          height="28"
        />
      </IconGroup>
      <NFTText margin="8px 0px 0px" fontSize="18px" align="left">
        {props.header}
      </NFTText>
      <NFTText
        margin="8px 0px 0px"
        fontSize="14px"
        align="left"
        color="rgba(255, 255, 255, 0.5)"
      >
        {props.context}
      </NFTText>
    </CustomCard>
  );
};

export default WalletCard;
