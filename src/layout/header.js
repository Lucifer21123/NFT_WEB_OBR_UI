import React from 'react';
import { NavLink } from 'react-router-dom';

import { FlexLayout } from '../components/styles';
import SearchForm from '../components/SearchForm';
import HeaderMenu from './HeaderMenu.js';
import { HeaderWrapper } from './styles';
import theme from '../theme';
import { Button } from '../components/Button';

import logoImage from '../assets/img/svgs/logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <FlexLayout
        width="100%"
        padding="16px 0"
        backgroundColor={theme.bgMain}
        justify="space-between"
        className="header-container nft-container"
      >
        <NavLink to="/" className="logo-wrapper">
          <img src={logoImage} />
        </NavLink>
        <SearchForm />
        <HeaderMenu />
        <div className="header-buttons">
          <Button variant="blue">Create</Button>
          <Button variant="transparent">Connect wallet</Button>
        </div>
      </FlexLayout>
    </HeaderWrapper>
  );
};

export default Header;
