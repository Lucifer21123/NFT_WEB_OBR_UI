import React from 'react';
import LiveCard from './SlickCard/LiveCard';
import HotSliderCard from './SlickCard/HotSliderCard';
import Slider from 'react-slick';
import styled from 'styled-components';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
const LiveCardContainer = styled.div`
  margin: 24px 0px 0px;
`;

const SlickSlider = ({ list, type, settings, arrowPosition }) => {
  return (
    <LiveCardContainer>
      <Slider
        {...settings}
        nextArrow={<NextArrow arrowPosition={arrowPosition} />}
        prevArrow={<PrevArrow arrowPosition={arrowPosition} />}
      >
        {list.map((item, key) => {
          return type == 'live' ? (
            <LiveCard data={item} key={key} />
          ) : (
            <HotSliderCard data={item} key={key} />
          );
        })}
      </Slider>
    </LiveCardContainer>
  );
};

export default SlickSlider;
