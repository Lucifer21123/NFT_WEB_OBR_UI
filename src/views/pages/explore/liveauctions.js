import React from 'react';
import { LiveAuctionsWrapper } from './styles';
import { liveData } from '../../../constants/menus';
import SlickSlider from '../../../components/SlickSlider/index';

const LiveAuctions = () => {
  return (
    <LiveAuctionsWrapper>
      <h3>
        <b>Live auctions 🔥</b>
      </h3>
      <SlickSlider type="live" list={liveData}></SlickSlider>
    </LiveAuctionsWrapper>
  );
};

export default LiveAuctions;
