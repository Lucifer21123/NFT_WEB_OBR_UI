import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';

import { FlexLayout } from '../components/styles';
import SearchForm from '../components/SearchForm';
import HeaderMenu from './HeaderMenu.js';
import HeaderButtons from './HeaderButtons.js';
import { HeaderWrapper } from './styles';
import theme from '../theme';

import logoImage from '../assets/img/svgs/logo.svg';

const Header = () => {
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
              <img src={logoImage} />
            </NavLink>
            <SearchForm />
            <HeaderMenu />
            <HeaderButtons />
          </FlexLayout>
        </HeaderWrapper>
      )}
      {!below480 && (
        <HeaderWrapper>
          <FlexLayout
            width="100%"
            justify="space-between"
            margin="0 0 8px 0"
            className="header-container nft-container"
          >
            <NavLink to="/" className="logo-wrapper">
              <img src={logoImage} />
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
      {below480 && (
        <HeaderWrapper>
          <FlexLayout
            width="100%"
            justify="space-between"
            margin="0 0 8px 0"
            className="header-container nft-container"
          >
            <NavLink to="/" className="logo-wrapper">
              <img src={logoImage} />
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
          </FlexLayout>
          <FlexLayout
            width="100%"
            backgroundColor={theme.bgMain}
            justify="space-between"
            className="header-container nft-container"
          >
            <HeaderButtons />
          </FlexLayout>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
