import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 220px;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 110px;
  img {
    width: 100%;
    height: 110px;
  }
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    color: white;
    font-weight: 900;
    margin-bottom: 0px;
  }
  span {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
    line-height: 17.94px;
    font-family: inherit;
    font-weight: 700;
    margin-top: 4px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }
`;

const HotSliderCard = ({ data }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ImageContainer>
          <img src={data.src}></img>
        </ImageContainer>
        <TextContainer>
          <p>{data.title}</p>
          <span>{data.tag}</span>
        </TextContainer>
      </CardContainer>
      <BadgeContainer>
        <img src={data.badge} />
      </BadgeContainer>
    </CardWrapper>
  );
};

export default HotSliderCard;
