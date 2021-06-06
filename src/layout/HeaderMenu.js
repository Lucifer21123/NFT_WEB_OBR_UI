import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const menus = [
  {
    id: 'explore',
    label: 'Explore',
    to: '/explore',
  },
  {
    id: 'myitems',
    label: 'My items',
    to: '/items',
  },
];

const HeaderMenu = () => {
  const path = useLocation().pathname;
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedPath, setSelectedPath] = useState('');
  const [hoverMenu, setHoverMenu] = useState('');
  const [menuItem, setMenuItem] = useState(menus[0]);

  useEffect(() => {
    setSelectedPath(path);
  }, []);

  const handleHoverMenu = (id) => {
    setHoverMenu(id);
  };

  const handleLeaveMenu = () => {
    setHoverMenu('');
  };

  const handleSelectedMenu = (item) => {
    setSelectedMenu(item.id);
    setMenuItem(item);
    setSelectedPath('');
  };

  return (
    <Nav className="menu-wrapper">
      {menus.map((item, index) => {
        return (
          <NavItem
            key={`__key-${index.toString()}`}
            className={
              selectedMenu === item.id || selectedPath === item.to
                ? 'active'
                : ''
            }
          >
            <NavLink
              to={item.to}
              className={
                selectedMenu === item.id || selectedPath === item.to
                  ? 'menu-active'
                  : ''
              }
              onClick={() => handleSelectedMenu(item)}
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

export default HeaderMenu;
