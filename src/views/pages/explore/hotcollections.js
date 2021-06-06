import React from 'react';
import { LiveAuctionsWrapper } from './styles';
import { hotdata } from '../../../constants/menus';
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
