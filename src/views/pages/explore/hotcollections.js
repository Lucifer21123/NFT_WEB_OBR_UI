import React from 'react';
import { LiveAuctionsWrapper } from './styles';
import { hotdata } from '../../../constants/menus';
import SlickSlider from '../../../components/SlickSlider/index';
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const HotCollections = () => {
  return (
    <LiveAuctionsWrapper>
      <h3>
        <b>Hot collections 💥</b>
      </h3>
      <SlickSlider type="hot" list={hotdata} settings={settings}></SlickSlider>
    </LiveAuctionsWrapper>
  );
};

export default HotCollections;
