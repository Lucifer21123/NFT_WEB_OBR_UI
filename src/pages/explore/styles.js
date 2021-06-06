import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 32px 0;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
`;

export const HeroItemWrapper = styled.div`
  padding: 0 20px 0 0;
  min-width: 261px;
  height: 261px;
  display: flex;

  :last-child {
    padding: 0;
  }
`;

export const HeroCard = styled.div`
  border-radius: 16px;
  position: relative;
  transition: all 0.12s ease-in-out 0s;
  width: 100%;
  height: 241px;
  overflow: hidden;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    .hero-background {
      transform: scale(1.1);
    }
  }

  .card-info {
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    padding-right: 40px;
    overflow: hidden;
  }
`;

export const HeroBackground = styled.div`
  background-image: url(${(props) => props.bkImage || 'none'});
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s ease-in-out 0s;
  width: 100%;
  height: 100%;
`;

export const TopCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  h3 {
    display: flex;
  }
`;

export const LiveAuctionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0px 0px;
  margin-bottom: 30px;
  h3 {
    display: flex;
  }
`;

export const ExploreSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ExploreHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;

  h3 {
    margin-right: 15px;
    margin-bottom: 20px;
  }

  & .ExploreButtonGroupArea {
    display: flex;
    flex: 1;
    overflow-x: scroll;
    margin-right: -10px;
    & .ButtonContainer {
      margin-right: 10px;
    }
  }

  & .FilterButtonArea {
    display: flex;
    justify-content: flex-end;
    & div {
      margin-left: 10px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardGridArea = styled.div`
  padding: 10px;
  width: 25%;
  @media screen and (max-width: 1323px) {
    width: 25%;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
