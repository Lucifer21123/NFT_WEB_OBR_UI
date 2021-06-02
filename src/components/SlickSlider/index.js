import React from 'react';
import LiveCard from './SlickCard/LiveCard';
import HotSliderCard from './SlickCard/HotSliderCard';
import Slider from 'react-slick';
import styled from 'styled-components';

const LiveCardContainer = styled.div`
  margin: 24px 0px 0px;
`;

const NextArrorwCarsor = styled.div`
  &: hover, focus {
    background: rgb(18, 18, 18);
    color: rgb(255, 255, 255);
  }
  border-color: rgba(255, 255, 255, 0.18);
  @media (min-width: 578px) {
    width: 47px;
    height: 47px;
  }
  &.slick-arrow {
    position: absolute;
    bottom: -40px;
    left: 50%;
    width: 34px;
    height: 34px;
    padding: 0;
    text-indent: -9999px;
    background-repeat: no-repeat;
    background: red;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
    }
    &.slick-prev {
      transform: translateX(-50%) translateX(-30px);
      z-index: 2;
      &:after {
        transform: translateX(-50%) translateX(-2px) translateY(-50%);
        border-width: 9px 12px 9px 0;
        border-color: transparent #fff transparent transparent;
      }
    }
    &.slick-next {
      transform: translateX(-50%) translateX(30px);
      z-index: 1;
      &:after {
        transform: translateX(-50%) translateX(2px) translateY(-50%);
        border-width: 9px 0 9px 12px;
        border-color: transparent transparent transparent #fff;
      }
    }
    &.slick-disabled {
      cursor: default;
      background: green;
      opacity: 0.5;
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => {
  return (
    <NextArrorwCarsor>
      <button
        {...props}
        className={
          'slick-next slick-arrow' +
          (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        next
      </button>
    </NextArrorwCarsor>
  );
};

const SlickSlider = ({ list, type, settings }) => {
  return (
    <LiveCardContainer>
      <Slider {...settings}>
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
