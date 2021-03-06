import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../components/Button';

const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      <Button variant="blue">
        <NavLink to="/create" className="logo-wrapper">
          Create
        </NavLink>
      </Button>
      <Button variant="transparent">
        <NavLink to="/token/:id" className="logo-wrapper">
          Connect Wallet
        </NavLink>
      </Button>
    </div>
  );
};

export default HeaderButtons;
