import React from 'react';
import { FlexLayout, NFTText } from '../components/styles';
import { FooterWrapper } from './styles';
import theme from '../theme';
import EmailForm from '../components/EmailForm';
import FooterMenu from './FooterMenu';
import { raribleMenus, communityMenus, languageMenu } from '../constants/menus';
import LanguageSelect from '../components/LanguageSelect';

const Footer = () => {
  return (
    <FooterWrapper>
      <FlexLayout
        width="100%"
        padding="16px 0"
        backgroundColor={theme.bgMain}
        justify="space-between"
        className="nft-container"
        direction="column"
      >
        <FlexLayout
          width="100%"
          justify="space-between"
          align="flex-start"
          className="primary-footer"
        >
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
          <FlexLayout
            direction="column"
            className="rarible-menu"
            align="flex-start"
          >
            <NFTText fontSize="18px" fontWeight="900" margin="0 0 16px 0">
              Rarible
            </NFTText>
            <FooterMenu menus={raribleMenus} />
          </FlexLayout>
          <FlexLayout
            direction="column"
            className="rarible-menu"
            align="flex-start"
          >
            <NFTText fontSize="18px" fontWeight="900" margin="0 0 16px 0">
              Community
            </NFTText>
            <FooterMenu menus={communityMenus} />
          </FlexLayout>
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
        </FlexLayout>
      </FlexLayout>
    </FooterWrapper>
  );
};

export default Footer;
