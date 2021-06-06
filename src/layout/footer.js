import React from 'react';
import { Row, Col } from 'reactstrap';

import { FlexLayout, NFTText } from '../components/styles';
import { FooterWrapper, FooterPolicy } from './styles';
import EmailForm from '../components/EmailForm';
import FooterMenu from './FooterMenu';
import { raribleMenus, communityMenus, languageMenu } from '../constants/menus';
import LanguageSelect from '../components/LanguageSelect';
import { FiTwitter } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <FooterWrapper>
      <FlexLayout
        width="100%"
        padding="16px 0"
        justify="space-between"
        direction="column"
        className="nft-container"
      >
        <Row className="w-100">
          <Col xl={4} lg={12} className="mb-5">
            <FlexLayout
              direction="column"
              className="email-form-container"
              align="flex-start"
            >
              <NFTText fontSize="18px" fontWeight="900" margin="0 0 16px 0">
                Get the latest Rarible updates
              </NFTText>
              <EmailForm />
            </FlexLayout>
          </Col>
          <Col xl={8} lg={12}>
            <Row>
              <Col sm={8} className="mb-5">
                <Row>
                  <Col>
                    <FlexLayout
                      direction="column"
                      className="rarible-menu"
                      align="flex-start"
                    >
                      <NFTText
                        fontSize="18px"
                        fontWeight="900"
                        margin="0 0 16px 0"
                      >
                        Rarible
                      </NFTText>
                      <FooterMenu menus={raribleMenus} />
                    </FlexLayout>
                  </Col>
                  <Col>
                    <FlexLayout
                      direction="column"
                      className="rarible-menu"
                      align="flex-start"
                    >
                      <NFTText
                        fontSize="18px"
                        fontWeight="900"
                        margin="0 0 16px 0"
                      >
                        Community
                      </NFTText>
                      <FooterMenu menus={communityMenus} />
                    </FlexLayout>
                  </Col>
                </Row>
              </Col>

              <Col sm={4}>
                <FlexLayout
                  direction="column"
                  className="rarible-menu"
                  align="flex-start"
                >
                  <NFTText fontSize="18px" fontWeight="900" margin="0 0 16px 0">
                    Language
                  </NFTText>
                  <LanguageSelect list={languageMenu} />
                </FlexLayout>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="w-100">
          <FlexLayout
            width="100%"
            justify="space-between"
            direction="row"
            margin="20px 0px"
          >
            <FooterPolicy>
              <div className="boxes">
                <div className="terms">
                  <span>Terms</span>
                  <span>Privacy</span>
                </div>
                <div className="icongroup">
                  <div className="icongroupContainer">
                    <span>
                      <FiTwitter></FiTwitter>
                    </span>
                    <span>
                      <GrInstagram></GrInstagram>
                    </span>
                    <span>
                      <FiTwitter></FiTwitter>
                    </span>
                    <span>
                      <GrInstagram></GrInstagram>
                    </span>
                    <span>
                      <FiTwitter></FiTwitter>
                    </span>
                    <span>
                      <GrInstagram></GrInstagram>
                    </span>
                  </div>
                </div>
                <div className="copyright">
                  <span>© Rarible, Inc. All rights reserved.</span>
                </div>
              </div>
            </FooterPolicy>
          </FlexLayout>
        </Row>
      </FlexLayout>
    </FooterWrapper>
  );
};

export default Footer;
