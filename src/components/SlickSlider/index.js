import React from 'react';
import LiveCard from './SlickCard/LiveCard';
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
  & .slick-arrow {
    width: 47px;
    height: 47px;
    background: red;
    border-color: rgba(255, 255, 255, 0.18);
  }
  & .slick-next {
    width: 47px;
    height: 47px;
    background: red;
    border-radius: 100%;
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <NextArrorwCarsor>
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      ></div>
    </NextArrorwCarsor>
  );
};

const SlickSlider = ({ list, type }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
  };

  return (
    <LiveCardContainer>
      <Slider {...settings}>
        {list.map((item, key) => {
          return type == 'live' ? (
            <LiveCard data={item} key={key} />
          ) : (
            <LiveCard data={item} key={key} />
          );
        })}
      </Slider>
    </LiveCardContainer>
  );
};

export default SlickSlider;
