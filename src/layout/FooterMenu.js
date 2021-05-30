import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const FooterMenu = ({ menus }) => {
  const [hoverMenu, setHoverMenu] = useState('');

  const handleHoverMenu = (id) => {
    setHoverMenu(id);
  };

  const handleLeaveMenu = () => {
    setHoverMenu('');
  };

  return (
    <Nav className="menu-wrapper footer-menu">
      {menus.map((item, index) => {
        return (
          <NavItem key={`__key-${index.toString()}`}>
            <NavLink
              to={item.to}
              onMouseOver={() => handleHoverMenu(item.id)}
              onMouseLeave={() => handleLeaveMenu()}
            >
              {item.label}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default FooterMenu;
