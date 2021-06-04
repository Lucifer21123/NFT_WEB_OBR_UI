import React, { useState } from 'react';
import styled from 'styled-components';
import { AvatarItem } from '../AvatarItem';
import { AvatarEthItem } from '../AvatarEthItem';
const WholeTab = styled.div`
  margin: 32px 0px 0px;
  padding: 0px 16px;
`;
const Tabstyle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: auto;
  height: 50px;
  overflow: hidden;
  max-width: 100%;

  & button {
    outline: none;
    background: transparent;
    border: none;
    margin-left: 20px;
    text-decoration: none;
    font-size: 15px;
    line-height: 20.7px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const TabSelect = () => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'Bids',
      content: (
        <svg
          viewBox="0 0 12 16"
          fill="none"
          width="38"
          height="38"
          xlmns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: 'tab2',
      label: 'Details',
      content: (
        <>
          <AvatarItem header="owner" text="mikeshapesart"></AvatarItem>
          <AvatarItem header="owner" text="mikeshapesart"></AvatarItem>
          <AvatarItem header="owner" text="mikeshapesart"></AvatarItem>
        </>
      ),
    },
    {
      name: 'tab3',
      label: 'History',
      content: (
        <AvatarEthItem header="owner" text="mikeshapesart"></AvatarEthItem>
      ),
    },
  ];

  return (
    <>
      <Tabstyle>
        {tabList.map((tab, i) => (
          <button
            key={i}
            onClick={() => setCurrentTab(tab.name)}
            className={tab.name === currentTab ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </Tabstyle>
      <WholeTab>
        {tabList.map((tab, i) => {
          if (tab.name === currentTab) {
            return <div key={i}>{tab.content}</div>;
          } else {
            return null;
          }
        })}
      </WholeTab>
    </>
  );
};
