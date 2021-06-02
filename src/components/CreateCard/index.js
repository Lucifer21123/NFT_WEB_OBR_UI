import React from 'react';
import styled from 'styled-components';
const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const CustomCardButtom = styled.div`
    padding: 49px 16px 33px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor:pointer;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    &:hover{
        border-color: rgba(255, 255, 255, 0.2);
    }
    background-color: transparent;
    span{
        text-decoration: none;
        font-weight: 700;
        text-align: center;
    }
}
`;
const ImageBar = styled.img`
  width: 85px;
  height: 135px;
  margin: 0px 0px 32px;
  padding: 0px;
  -webkit-box-align: stretch;
  align-items: stretch;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  max-width: 100%;
`;
const RibbonButton = styled.button`
  right: -13px;
  top: -18px;
  position: absolute;
  border-radius: 32px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  height: 32px;
  padding-left: 16px;
  border: 2px solid transparent;
  background: rgb(255, 255, 255);
  span {
    color: rgb(18, 18, 18);
    margin: 2px;
    font-weight: 700;
    text-align: center;
    line-height: 19.32px;
    text-decoration: none;
  }
`;

const CreateCard = (props) => {
  return (
    <CustomCard>
      <CustomCardButtom>
        <ImageBar src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmXLbNfhbQc16vMczeZEiPktio9iAhXGirvJVqSmihQ5C2&w=100"></ImageBar>
        <span>{props.text}</span>
        {props.ribbon ? (
          <RibbonButton>
            <span>{props.ribbon}</span>
          </RibbonButton>
        ) : (
          <></>
        )}
      </CustomCardButtom>
    </CustomCard>
  );
};

export default CreateCard;
