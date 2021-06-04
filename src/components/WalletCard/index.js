import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px 24px 0px 24px;
  cursor: pointer;
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
  max-width: 100%;
  -webkit-box-flex: 1;
  height: 154px;
  width: 100%;
`;
const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
const SubIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 15px;
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

export const WalletCard = (props) => {
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
        {props.icon.map((value, key) => {
          return <SubIcon key={key + 1} alt="Torus" src={value} />;
        })}
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
