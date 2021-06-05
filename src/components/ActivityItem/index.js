import React from 'react';
import styled from 'styled-components';
import { NFTText } from '../styles';
const ActStyle = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.12s ease-in-out 0s;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 0px;
  padding: 24px;
  border-radius: 16px;
  transition: all 0.12s ease-in-out 0s;
  border: 1px solid rgba(255, 255, 255, 0.1);

  & .container {
    display: flex;
    flex-direction: row;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.05);
    border-color: transparent;
  }
`;
const IconView = styled.div`
  cursor: pointer;
  & img {
    visibility: visible;
    width: 68px;
    height: 68px;
    object-fit: cover;
    border-radius: 6px;
    align-items: center;
  }
`;
const TextView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
  padding: 0px;
  justify-content: center;
  & .headertext {
    cursor: pointer;
  }
  & .middletext {
    display: flex;
    flex-direction: row;
  }
`;
const SubImage = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    border-radius: 100%;
  }
`;
export const Activityitem = () => {
  return (
    <ActStyle>
      <div className="container">
        <IconView>
          <img src="https://lh3.googleusercontent.com/ZKzE7CMq5dRxzwtaZYeE4VICDXtQbA54ishowIR7osFLqMV2rQSdZjXLUNj1ywlkJz3MCC1XoUwqKgAJtwF0tTFt=s250" />
          <svg width="12" height="12" xlmns="http://www.w3.org/2000/svg">
            <path d="M3 4H11.5"></path>
            <path d="M5 1L2 4L5 7"></path>
            <path d="M10.5 10H2"></path>
            <path d="M8.5 7L11.5 10L8.5 13"></path>
          </svg>
        </IconView>
        <TextView>
          <div class="headertext">
            <NFTText fontWeight=" 900" align="left">
              JustLiquidty NFT Token Bridge ETH-BSC
            </NFTText>
          </div>

          <div className="middletext">
            <NFTText
              fontWeight=" 500"
              fontSize="14px"
              color="rgba(255, 255, 255, 0.5)"
              align="left"
            >
              transferred from
            </NFTText>
            <SubImage>
              <img
                alt="Identicon"
                width="16px"
                height="16px"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDg3LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsODcsMSk7IHN0cm9rZS13aWR0aDowLjA4Oyc+PHJlY3QgIHg9JzcnIHk9JzUnIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNycgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc3JyB5PSc4JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzcnIHk9JzknIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNicgeT0nNScgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc4JyB5PSc1JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzYnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nOCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc2JyB5PSc5JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzgnIHk9JzknIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc5JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PC9nPjwvc3ZnPg=="
              />
              <NFTText fontWeight=" 900" fontSize="14px">
                0x3842e3f8f...5e68
              </NFTText>
            </SubImage>
            <NFTText
              fontWeight=" 500"
              fontSize="14px"
              color="rgba(255, 255, 255, 0.5)"
              align="left"
            >
              to
            </NFTText>

            <SubImage>
              <img
                alt="Identicon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDg3LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsODcsMSk7IHN0cm9rZS13aWR0aDowLjA4Oyc+PHJlY3QgIHg9JzcnIHk9JzUnIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNycgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc3JyB5PSc4JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzcnIHk9JzknIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNicgeT0nNScgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc4JyB5PSc1JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzYnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nOCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc2JyB5PSc5JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PHJlY3QgIHg9JzgnIHk9JzknIHdpZHRoPScxJyBoZWlnaHQ9JzEnLz48cmVjdCAgeD0nNScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMScvPjxyZWN0ICB4PSc5JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJy8+PC9nPjwvc3ZnPg=="
                width="16px"
                height="16px"
              />

              <NFTText fontWeight=" 900" fontSize="14px">
                You
              </NFTText>
            </SubImage>
          </div>
          <div class="undertext">
            <NFTText
              fontWeight=" 500"
              fontSize="14px"
              color="rgba(255, 255, 255, 0.5)"
              align="left"
            >
              5/24/2021, 7:09 PM
            </NFTText>
          </div>
        </TextView>
      </div>
    </ActStyle>
  );
};
