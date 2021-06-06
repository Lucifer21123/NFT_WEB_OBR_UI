import React, { useState } from 'react';
import styled from 'styled-components';
import { CircleButton } from '../../CircleButton';

const LiveCardWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const LiveCardArea = styled.div`
  background: rgb(18, 18, 18);
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  max-width: 100%;
  @media (min-width: 981px) {
    padding: 22px 24px;
  }
  @media (min-width: 768px) {
    padding: 18px 22px;
  }
`;

const ImageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  z-index: 5;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;
const ImageBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 100%;
  width: 26px;
  height: 26px;
  overflow: hidden;

  & img {
    width: 26px;
    height: 26px;
    position: absolute;
    border-radius: 100%;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  height: 202px;
  display: flex;
  align-item: center;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  & a {
    font-size: 14px;
    font-weight: 900px;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    color: white;
  }
`;

const BidContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  & span {
    font-size: 14px;
    line-height: 19.32px;
    font-weight: 900;
  }
`;

const CommentContainer = styled.div`
  margin: 4px 0px 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  & span {
    color: rgb(0, 102, 255);
    background: linear-gradient(
        126.49deg,
        rgb(0, 163, 255) 0%,
        rgb(0, 102, 255) 100%
      )
      text;
  }
`;

const CommentText = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 22px;
  padding: 6px 12px;
  background: transparent;
  border-color: transparent;
  height: 36px;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  & svg {
    width: 16px;
    height: 16px;
  }
  & p {
    margin-top: 15px;
    margin-left: 4px;
    font-size: 14px;
  }
`;

const LiveCard = ({ data }) => {
  return (
    <LiveCardWrapper>
      <LiveCardArea>
        <ImageHeader>
          <ImageContainer>
            <ImageBody>
              <img src={data.badgeSrc1} />
            </ImageBody>
            <ImageBody>
              <img src={data.badgeSrc2} style={{ left: '14px' }} />
            </ImageBody>
            <ImageBody>
              <img src={data.badgeSrc3} style={{ left: '28px' }} />
            </ImageBody>
          </ImageContainer>
          <CircleButton>
            <svg
              viewBox="0 0 14 4"
              fill="none"
              width="13.200000000000001"
              height="13.200000000000001"
              xlmns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </CircleButton>
        </ImageHeader>
        <ImageCard>
          <img src={data.imageSrc} />
        </ImageCard>
        <TitleContainer>
          <a href={data.href}>{data.title}</a>
        </TitleContainer>
        <BidContainer>
          <span>Highest bid {data.bids}</span>
          <CommentContainer>
            <span>{data.price} wETH</span>
            <CommentText>
              <svg
                viewBox="0 0 17 16"
                fill="none"
                width="16"
                height="16"
                xlmns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                  stroke="rgba(255, 255, 255, 1)"
                  strokeWidth="2"
                ></path>
              </svg>
              <p>{data.comment}</p>
            </CommentText>
          </CommentContainer>
        </BidContainer>
      </LiveCardArea>
    </LiveCardWrapper>
  );
};
export default LiveCard;
