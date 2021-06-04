import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
export const CreatorItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;
export const SellerCellArea = styled.div`
  display: flex;
  flex-direction: row nowrap;

  padding: -15px 0px 5px 15px;
  & .number {
    margin: 0px 16px;
    padding: 0px;
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
    & span {
      margin-top: 15px;
      font-size: 14px;
      line-height: 20.7px;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }
  & .imgContainer {
    width: 40px;
    height: 40px;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    & .badge {
      position: absolute;
      right: -4px;
      bottom: -8px;
      z-index: 10;

      & img {
        width: 16px;
        height: 16px;
      }
    }
    & img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      justify-content: center;
    }
  }
`;
export const Creator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CreaterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 1;
  flex-basis: auto;
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin-left: 20px;
  & span {
    font-family: 'Circular Std', Helvetica, Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
    font-weight: 400;
    line-height: 1.38;
    color: rgb(255, 255, 255);
  }
  & a {
    text-decoration: none;
    background-color: transparent;
    color: rgb(255, 255, 255);
  }
`;

export const AvatarItem = (props) => {
  return (
    <Creator>
      <NFTText
        color="rgba(255, 255, 255, 0.5)"
        fontSize="14px"
        fontWeight="900"
        align="left"
      >
        {props.header}
      </NFTText>

      <CreatorItem>
        <SellerCellArea>
          <div className="imgContainer">
            <img
              src="https://images.rarible.com/?fit=outsize&amp;n=-1&amp;url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmbxtXa3biXbQjnAu1PBm4N9iWA8w4TbmrPqjApQy4dzpm&amp;w=100"
              className="sc-eirseW sc-lbVuaH sc-gGLyOc evgNzS camVCa hSJDWM sc-fbIXFq geecTj"
            />
            <div className="badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                  fill="#feda03"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </SellerCellArea>
        <CreaterText>
          <span>
            <a href="#">{props.text}</a>
          </span>
        </CreaterText>
      </CreatorItem>
    </Creator>
  );
};
