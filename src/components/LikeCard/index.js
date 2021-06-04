import React from 'react';
import styled from 'styled-components';
const CardStyle = styled.div`
  padding: 22px 24px;
  inset: 0px;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: relative;
  background: rgb(18, 18, 18);
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  & .inline {
    position: relative;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
  }
`;
export const LikeCard = (props) => {
  return (
    <CardStyle>
      <div className="inline"></div>
    </CardStyle>
  );
};
