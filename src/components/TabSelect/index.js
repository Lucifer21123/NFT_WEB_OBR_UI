import React, { useState } from 'react';
import styled from 'styled-components';
import { AvatarItem } from '../AvatarItem';
import { AvatarEthItem } from '../AvatarEthItem';
import { NotFoundBid } from '../NotFoundBid';
import LiveCard from '../SlickSlider/SlickCard/LiveCard';
import { NotFoundItem } from '../NotFoundItem';
import { Activityitem } from '../ActivityItem';
const WholeTab = styled.div`
  margin: 32px 0px 32px;
  padding: 0px 16px;
  display: flex;
  flex-direction: row;
`;
const Tabstyle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: auto;
  height: 50px;
  overflow: hidden;
  max-width: 100%;
`;
const SubTabBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  & button {
    background: transparent;
    border: none;
    text-decoration: none;
    font-size: 15px;
    line-height: 20.7px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    outline: none;
    & .currentTab {
      color: white;
    }
  }

  & .underline {
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgb(255, 255, 255);
    height: 1px;
    width: 90%;
    justify-content: center;
    margin: 25px 0px 0px 4px;
  }
  & .fac {
    color: rgba(255, 255, 255, 0.4);
    vertical-align: top;
    margin-left: 4px;
    font-size: 10px;
  }
`;
const data = {
  badgeSrc1:
    'https://dl.airtable.com/.attachments/81e60084fcff51976769df234f49ac15/80807df2/Gummy_Bear-8_PROMO0030.png',
  badgeSrc2:
    'https://dl.airtable.com/.attachments/81e60084fcff51976769df234f49ac15/80807df2/Gummy_Bear-8_PROMO0030.png',
  badgeSrc3:
    'https://dl.airtable.com/.attachments/81e60084fcff51976769df234f49ac15/80807df2/Gummy_Bear-8_PROMO0030.png',
  imageSrc:
    'https://lh3.googleusercontent.com/ZKzE7CMq5dRxzwtaZYeE4VICDXtQbA54ishowIR7osFLqMV2rQSdZjXLUNj1ywlkJz3MCC1XoUwqKgAJtwF0tTFt=s250',
};

export const TabSelect = () => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'Bids',
      content: (
        <>
          <LiveCard data={data} />
        </>
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
          <SubTabBtn>
            <button
              key={i}
              onClick={() => setCurrentTab(tab.name)}
              className={tab.name === currentTab ? 'active' : ''}
            >
              {tab.label}
              <span className="fac">1</span>
            </button>
            <div class={tab.name === currentTab ? 'underline' : 'no'}></div>
          </SubTabBtn>
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
