import React from 'react';

import DropDown from '../../components/Dropdown';
import { TopCustomerWrapper } from './styles';
import {
  languageMenu,
  seller,
  sellersDrop,
  daysDrop,
} from '../../constants/menus';

import SellerCellGrid from '../../components/TopSellerGrid';

const TopCustomer = () => {
  const clickHandle = (val) => {
    console.log(val);
  };
  return (
    <TopCustomerWrapper>
      <h3>
        <b>Top</b>
        <DropDown list={sellersDrop} click={clickHandle} />
        in
        <DropDown list={daysDrop} click={clickHandle} />
      </h3>
      <SellerCellGrid data={seller}></SellerCellGrid>
    </TopCustomerWrapper>
  );
};

export default TopCustomer;
