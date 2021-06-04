import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import theme from '../theme';
import { CircleButton } from '../components/CircleButton';
import LogoImage from '../assets/img/svgs/logo.svg';
import CloseSvg from '../assets/img/svgs/close.svg';

const MobileMenuWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: ${theme.bgMain};
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 200;

  .mobile-menu-container {
    max-width: 100%;
    position: absolute;
    inset: 0;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 74px;
    justify-content: space-between;
  }

  .mobile-menu-body {
    margin: 8px 0px 0px;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  .mobile-menu-footer {
    margin: 32px 0px 0px;
    display: flex;
    flex-direction: column;
  }
`;

const MobileMenu = ({ mobileMenuOpened, setMobileMenuOpened }) => {
  return (
    <MobileMenuWrapper>
      <div className="mobile-menu-container nft-container">
        <div className="mobile-menu-header">
          <NavLink to="/" className="logo-wrapper">
            <img src={LogoImage} />
          </NavLink>
          <CircleButton onClick={() => setMobileMenuOpened(false)}>
            <img src={CloseSvg} alt={'menu'} />
          </CircleButton>
        </div>
        <div className="mobile-menu-body">123</div>
        <div className="mobile-menu-footer">123</div>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
