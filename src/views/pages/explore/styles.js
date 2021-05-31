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
  h3 {
    display: flex;
  }
`;
