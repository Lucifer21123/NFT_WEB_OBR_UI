import React from 'react';
import { LiveAuctionsWrapper } from './styles';
import { liveData } from '../../../constants/menus';
import SlickSlider from '../../../components/SlickSlider/index';
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
