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
