import {
  ExploreSectionWrapper,
  ExploreHeaderSection,
  CardContainer,
  CardGridArea,
} from './styles';
import React, { useState, useEffect } from 'react';
import DropdownMenu from '../../components/DropdownMenu/index';
import { Button } from '../../components/Button';

import { liveData } from '../../constants/menus';
import LiveCard from '../../components/SlickSlider/SlickCard/LiveCard';
import { BiSlider } from 'react-icons/bi';

const data = [
  {
    id: 'sort by',
    label: 'sort by',
    type: 'label',
  },
  {
    id: 'recently added',
    label: 'recently added',
    type: 'item',
  },
  {
    id: 'Cheapest',
    label: 'Cheapest',
    type: 'item',
  },
  {
    id: 'hight price',
    label: 'hight price',
    type: 'item',
  },
  {
    id: 'Most liked',
    label: 'Most liked',
    type: 'item',
  },
  {
    id: 'Options',
    label: 'Options',
    type: 'label',
  },
  {
    id: 'Verified only',
    label: 'Verified only',
    type: 'item',
  },
];

const ButtonData = [
  {
    id: 'all',
    variant: 'white',
  },
  {
    id: '🌈 Art',
    variant: 'transparent',
  },
  {
    id: '📸 Photography',
    variant: 'transparent',
  },
  {
    id: '👾 Metaverses',
    variant: 'transparent',
  },
  {
    id: '🎵 Music',
    variant: 'transparent',
  },
  {
    id: '💰 DeFi',
    variant: 'transparent',
  },
  {
    id: '🤡 Memes',
    variant: 'transparent',
  },
  {
    id: '🤘Punks',
    variant: 'transparent',
  },
  {
    id: '🤘Punks',
    variant: 'transparent',
  },
  {
    id: '🎵 Music',
    variant: 'transparent',
  },
  {
    id: '💰 DeFi',
    variant: 'transparent',
  },
  {
    id: '💰 DeFi',
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
              <div className="ButtonContainer" key={key}>
                <Button variant={item.variant} size="big">
                  {item.id}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="FilterButtonArea">
          <DropdownMenu list={data} click={Click} radius="border-radius:48px;">
            <BiSlider></BiSlider> Filter & Sort
          </DropdownMenu>
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
