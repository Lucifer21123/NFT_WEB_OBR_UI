import React from 'react';
import { LiveAuctionsWrapper } from './styles';
import { liveData } from '../../../constants/menus';
import SlickSlider from '../../../components/SlickSlider/index';
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const LiveAuctions = () => {
  return (
    <LiveAuctionsWrapper>
      <h3>
        <b>Live auctions 🔥</b>
      </h3>
      <SlickSlider
        type="live"
        list={liveData}
        settings={settings}
      ></SlickSlider>
    </LiveAuctionsWrapper>
  );
};

export default LiveAuctions;
