import React from 'react';
import styled from 'styled-components';
const BidStyle = styled.div`
  inset: 0px;
  z-index: 1;
  height: 100%;
  position: relative;
  background: rgb(18, 18, 18);
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
`;
export const NotFoundBid = (props) => {
  return (
    <BidStyle>
      <div className="iconstyle"></div>
      <div className="imagestyle"></div>
      <div className="headerstyle"></div>
      <div className="description"></div>
    </BidStyle>
  );
};
