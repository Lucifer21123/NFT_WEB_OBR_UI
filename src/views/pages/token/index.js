import React from 'react';
import {
  Total,
  TokenContainer,
  VideoLayout,
  VideoItem,
  VideoContainer,
  DetailItem,
  Content,
  Title,
  MiniTitle,
  Collection,
  ButtonGroup,
  SaleText,
  DetailFooter,
  Bidbar,
  Spectator,
  FootBody,
  FooterText,
  FooterLeft,
  FooterRight,
} from './style';
import { NFTText } from '../../../components/styles';
import { Button } from '../../../components/Button';
import { AvatarItem } from '../../../components/AvatarItem';
import { TabSelect } from '../../../components/TabSelect';
import { IconButton } from '../../../components/IconButton';
const Token = (props) => {
  return (
    <TokenContainer>
      <VideoLayout>
        <VideoItem>
          <VideoContainer
            src="https://storage.opensea.io/files/09de080719731a1a108a2e065e264097.mp4"
            className="sc-ktvXtq sc-gXZlrW sc-bFSanr ktLmMJ cSNRJG bhFDDX
          sc-fxFQrc gpgOkp"
          ></VideoContainer>
        </VideoItem>
      </VideoLayout>

      <DetailItem>
        <Total>
          <Content>
            <div className="header">
              <Title>
                <NFTText fontSize="32px" margin="10px 10px 0px 0px">
                  Secrets Of The Veil
                </NFTText>
                <Button variant="transparent">
                  <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    width="15"
                    height="15"
                    xlmns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                      stroke="rgba(255, 255, 255, 1)"
                    ></path>
                  </svg>
                  14
                </Button>
                <IconButton>
                  <svg
                    viewBox="0 0 14 4"
                    fill="none"
                    width="13.200000000000001"
                    height="13.200000000000001"
                    xlmns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </IconButton>
              </Title>
              <MiniTitle>
                <NFTText
                  color="rgba(255, 255, 255, 0.5)"
                  margin="4px"
                  fontSize="14px"
                  fontWeight="900"
                >
                  Minimum bid
                </NFTText>
                <NFTText fontSize="14px" fontWeight="900" margin="4px">
                  0.01wETH
                </NFTText>
              </MiniTitle>
              <ButtonGroup>
                <Button variant="transparent">🌈 Art</Button>
                <Button variant="transparent">Unlockable</Button>
              </ButtonGroup>
              <Bidbar>
                <Collection>
                  <AvatarItem header="Creator" text="milkeshapesart" />
                  <AvatarItem header="Collection" text="Rarible" />
                </Collection>

                <SaleText>
                  <span className="back-text">
                    <span className="front-text">10% </span>
                    of sales will go to creator
                  </span>
                </SaleText>
              </Bidbar>
              <TabSelect />
            </div>
          </Content>
        </Total>
        <DetailFooter>
          <Spectator />
          <FootBody>
            <FooterText>
              <FooterLeft>
                <div className="bidheader">
                  <NFTText
                    color="rgba(255, 255, 255, 0.5)"
                    margin="5px 0px 0px 0px"
                    fontSize="14px"
                    fontWeight="900"
                    align="left"
                  >
                    Minimum bid
                  </NFTText>
                </div>

                <NFTText
                  margin="4px"
                  fontSize="20px"
                  fontWeight="900"
                  align="left"
                >
                  0.1 wETH
                </NFTText>
                <NFTText
                  color="rgba(255, 255, 255, 0.5)"
                  fontSize="14px"
                  fontWeight="900"
                  align="left"
                >
                  $263.20
                </NFTText>
              </FooterLeft>

              <FooterRight>
                <div className="bidheader">
                  <NFTText
                    color="rgba(255, 255, 255, 0.5)"
                    margin="5px 0px 0px 0px"
                    fontSize="14px"
                    fontWeight="900"
                    align="left"
                  >
                    Auction ends in
                  </NFTText>
                </div>
                <div className="bidbody">
                  <div className="bidtime">
                    <NFTText
                      margin="4px"
                      fontSize="20px"
                      fontWeight="900"
                      align="left"
                    >
                      5
                    </NFTText>
                    <NFTText
                      color="rgba(255, 255, 255, 0.5)"
                      fontSize="14px"
                      fontWeight="900"
                      align="left"
                    >
                      Days
                    </NFTText>
                  </div>
                  <div className="bidtime">
                    <NFTText
                      margin="4px"
                      fontSize="20px"
                      fontWeight="900"
                      align="left"
                    >
                      9
                    </NFTText>
                    <NFTText
                      color="rgba(255, 255, 255, 0.5)"
                      fontSize="14px"
                      fontWeight="900"
                      align="left"
                    >
                      Hours
                    </NFTText>
                  </div>
                  <div className="bidtime">
                    <NFTText
                      margin="4px"
                      fontSize="20px"
                      fontWeight="900"
                      align="left"
                    >
                      0
                    </NFTText>
                    <NFTText
                      color="rgba(255, 255, 255, 0.5)"
                      fontSize="14px"
                      fontWeight="900"
                      align="left"
                    >
                      Minutes
                    </NFTText>
                  </div>
                  <div className="bidtime">
                    <NFTText
                      margin="4px"
                      fontSize="20px"
                      fontWeight="900"
                      align="left"
                    >
                      5
                    </NFTText>
                    <NFTText
                      color="rgba(255, 255, 255, 0.5)"
                      fontSize="14px"
                      fontWeight="900"
                      align="left"
                    >
                      Second
                    </NFTText>
                  </div>
                </div>
              </FooterRight>
            </FooterText>
            <Button variant="lightBlue">Place a bid</Button>
          </FootBody>
        </DetailFooter>
      </DetailItem>
    </TokenContainer>
  );
};
export default Token;
