import React from 'react';

import DropDown from '../../../components/Dropdown';
import { TopCustomerWrapper } from './styles';
import {
  raribleMenus,
  communityMenus,
  languageMenu,
  seller,
} from '../../../constants/menus';

import SellerCellGrid from '../../../components/TopSellerGrid';

const TopCustomer = () => {
  const clickHandle = (val) => {
    console.log(val);
  };
  return (
    <TopCustomerWrapper>
      <h3>
        <b>Top</b>
        <DropDown list={languageMenu} label="sellers" click={clickHandle} />
        in
        <DropDown list={languageMenu} label="1 day" click={clickHandle} />
      </h3>
      <SellerCellGrid data={seller}></SellerCellGrid>
    </TopCustomerWrapper>
  );
};

export default TopCustomer;
