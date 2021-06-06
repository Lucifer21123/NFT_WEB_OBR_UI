import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bgMain};
  border-bottom: 1px solid ${theme.transparentBorder};

  .header-container {
    > :not(:last-child) {
      margin-right: 24px;
    }
  }

  .header-buttons {
    display: flex;
    align-items: center;

    > :not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const FooterWrapper = styled.footer`
  max-width: 1500px;
  border-top: 1px solid ${theme.transparentBorder};
  padding-top: 64px;
`;

export const FooterPolicy = styled.div`
  width: 100%;
  span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 900;
    cusor: pointer;
    :hover {
      color: white;
    }
  }
  & .boxes {
    & div {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      width: 100%;
    }
    & .terms {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding-left: 50px;
      & span {
        margin-right: 30px;
      }
      @media screen and (max-width: 768px) {
        padding-left: 0px;
        justify-content: center;
        flex: 1;
        text-align: center;
      }
    }
    & .icongroup {
      display: flex;
      flex: 1;
      justify-content: center;
      & .icongroupContainer {
        width: 230px;

        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          justify-content: space-between;
          text-align: center;
          width: 230px;
        }
      }
    }
    & .copyright {
      display: flex;
      flex: 1;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        justify-content: center;
        flex: 1;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 768px) {
    & .boxes {
      display: grid;
      grid-template-columns: 20% 60% 20%;
    }

    & .boxes div:nth-of-type(1) {
      order: 2;
    }

    & .boxes div:nth-of-type(2) {
      order: 3;
    }

    & .boxes div:nth-of-type(3) {
      order: 1;
    }
  }
`;
