import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NFTText } from '../../../components/styles';
import theme from '../../../theme';
import {
  HeroWrapper,
  HeroItemWrapper,
  HeroCard,
  HeroBackground,
} from './styles';

const HeroItem = ({ item }) => {
  return (
    <HeroItemWrapper>
      <HeroCard>
        <Link to={item.href}>
          <HeroBackground bkImage={item.src} className="hero-background" />
          <div className="card-info">
            <NFTText align="left">{item.title}</NFTText>
            <NFTText align="left" color={theme.textGray} margin="5px 0 0 0">
              {item.author}
            </NFTText>
          </div>
        </Link>
      </HeroCard>
    </HeroItemWrapper>
  );
};

const Hero = ({ heroList }) => {
  return (
    <HeroWrapper className="nft-scrollbar">
      {heroList.map((item, index) => {
        return <HeroItem key={`__key-${index.toString()}`} item={item} />;
      })}
    </HeroWrapper>
  );
};

export default Hero;
