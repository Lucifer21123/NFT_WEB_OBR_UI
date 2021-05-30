import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.header`
  z-index: 100;
  position: sticky;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;

  .header-container {
    border-bottom: 1px solid ${theme.transparentBorder};

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
  border-top: 1px solid ${theme.transparentBorder};
  padding-top: 64px;

  .primary-footer {
    display: flex;

    .email-form-container {
      width: 30%;
    }

    .rarible-menu {
      width: 20%;
    }
  }
`;
