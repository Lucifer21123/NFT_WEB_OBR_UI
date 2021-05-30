import React from 'react';

import DropDown from '../../../components/Dropdown';
import { TopCustomerWrapper } from './styles';

const TopCustomer = () => {
  return (
    <TopCustomerWrapper>
      <h3>
        Top
        <DropDown handler="123" content="<div>123</div>" />
        in
        <DropDown handler="456" content="<div>456</div>" />
      </h3>
    </TopCustomerWrapper>
  );
};

export default TopCustomer;
