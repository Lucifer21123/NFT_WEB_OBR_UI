import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';

import { FlexLayout } from '../components/styles';
import SearchForm from '../components/SearchForm';
import HeaderMenu from './HeaderMenu.js';
import HeaderButtons from './HeaderButtons.js';
import { HeaderWrapper } from './styles';
import theme from '../theme';
import { CircleButton } from '../components/CircleButton';

import LogoImage from '../assets/img/svgs/logo.svg';
import Menu from '../assets/img/svgs/menu.svg';
import SearchIcon from '../assets/img/svgs/search-icon.svg';

const Header = ({ mobileMenuOpened, setMobileMenuOpened }) => {
  const below900 = useMedia('(max-width: 900px)');
  const below480 = useMedia('(max-width: 480px)');

  return (
    <>
      {!below900 && (
        <HeaderWrapper>
          <FlexLayout
            width="100%"
            justify="space-between"
            className="header-container nft-container"
          >
            <NavLink to="/" className="logo-wrapper">
              <img src={LogoImage} />
            </NavLink>
            <SearchForm />
            <HeaderMenu />
            <HeaderButtons />
          </FlexLayout>
        </HeaderWrapper>
      )}
      {below900 && !below480 && (
        <HeaderWrapper>
          <FlexLayout
            width="100%"
            justify="space-between"
            margin="0 0 8px 0"
            className="header-container nft-container"
          >
            <NavLink to="/" className="logo-wrapper">
              <img src={LogoImage} />
            </NavLink>
            <SearchForm />
          </FlexLayout>
          <FlexLayout
            width="100%"
            backgroundColor={theme.bgMain}
            justify="space-between"
            className="header-container nft-container"
          >
            <HeaderMenu />
            <HeaderButtons />
          </FlexLayout>
        </HeaderWrapper>
      )}
      {below900 && below480 && (
        <HeaderWrapper>
          <FlexLayout
            width="100%"
            justify="space-between"
            margin="0 0 8px 0"
            className="header-container nft-container"
          >
            <NavLink to="/" className="logo-wrapper">
              <img src={LogoImage} />
            </NavLink>
            <FlexLayout>
              <CircleButton className="mr-2">
                <img src={SearchIcon} alt={'search'} />
              </CircleButton>
              <CircleButton
                onClick={() => {
                  setMobileMenuOpened(true);
                }}
              >
                <img src={Menu} alt={'menu'} />
              </CircleButton>
            </FlexLayout>
          </FlexLayout>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
