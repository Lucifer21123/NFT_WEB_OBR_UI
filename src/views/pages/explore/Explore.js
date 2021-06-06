import {
  ExploreSectionWrapper,
  ExploreHeaderSection,
  CardContainer,
  CardGridArea,
} from './styles';
import React, { useState, useEffect } from 'react';
import DropdownMenu from '../../../components/DropdownMenu/index';
import { Button } from '../../../components/Button';

import { liveData } from '../../../constants/menus';
import LiveCard from '../../../components/SlickSlider/SlickCard/LiveCard';

const data = [
  {
    id: 'sort by',
    label: 'sort by',
  },
  {
    id: 'recently added',
    label: 'recently added',
  },
  {
    id: 'Cheapest',
    label: 'Cheapest',
  },
  {
    id: 'hight price',
    label: 'hight price',
  },
  {
    id: 'Verified only',
    label: 'Verified only',
  },
  {
    id: 'Most liked',
    label: 'Most liked',
  },
];

const ButtonData = [
  {
    id: 'all',
    variant: 'white',
  },
  {
    id: 'Art',
    variant: 'transparent',
  },
  {
    id: 'Game',
    variant: 'transparent',
  },
  {
    id: 'Metaverses',
    variant: 'transparent',
  },
  {
    id: 'Music',
    variant: 'transparent',
  },
  {
    id: 'DeFi',
    variant: 'transparent',
  },
  {
    id: 'Mems',
    variant: 'transparent',
  },
  {
    id: 'punks',
    variant: 'transparent',
  },
];

const Click = (evet) => {};

const ButtonClick = (id) => {};

const ExploreSection = ({ toggle }) => {
  const toogleCardContainer = liveData.map((item, key) => {
    return (
      <CardGridArea key={key}>
        <LiveCard data={item}></LiveCard>
      </CardGridArea>
    );
  });

  return (
    <ExploreSectionWrapper>
      <ExploreHeaderSection>
        <h3>Expolre</h3>
        <div className="ExploreButtonGroupArea nft-scrollbar">
          {ButtonData.map((item, key) => {
            return (
              <Button variant={item.variant}>
                <span>{item.id}</span>
              </Button>
            );
          })}
        </div>
        <div className="FilterButtonArea">
          <DropdownMenu list={data} click={Click}></DropdownMenu>
        </div>
      </ExploreHeaderSection>
      <CardContainer>
        {liveData.map((data, key) => {
          return (
            <CardGridArea key={key}>
              <LiveCard data={data}></LiveCard>
            </CardGridArea>
          );
        })}
        {toggle ? toogleCardContainer : <></>}
      </CardContainer>
    </ExploreSectionWrapper>
  );
};

export default ExploreSection;
