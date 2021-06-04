import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { FlexLayout } from '../styles';
import theme from '../../theme';

const EmailFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  transition: all 0.12s ease-in-out 0s;
  color: rgba(255, 255, 255, 0.4);
  position: relative;

  .input-container {
    width: 100%;
    height: 48px;
    border-radius: 48px;
    border: 1px solid ${theme.transparentBorder};
    background: ${theme.bgInput};
    padding: 0px 95px 0px 20px;
    display: flex;

    input {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      background: transparent;
      color: ${theme.colorWhite};
    }
  }

  .button-container {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const EmailForm = () => {
  return (
    <EmailFormWrapper>
      <div className="input-container">
        <input placeholder="Your e-mail" type="text" />
      </div>
      <div className="button-container">
        <Button variant="lightBlue" size="medium">
          I'm in
        </Button>
      </div>
    </EmailFormWrapper>
  );
};

export default EmailForm;
