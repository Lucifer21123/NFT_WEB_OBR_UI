import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import theme from '../../theme';

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-handler {
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &.active {
      background-color: ${theme.bgBlue};
    }
  }

  .dropdown-content {
    top: calc(100% + 5px);
    left: 0;
    right: auto;
    display: inline-block;
    min-width: 200px;
    position: absolute;
    border-radius: 6px;
    background-color: ${theme.bgInput};
    z-index: 99;
  }

  /* If direction prop set to right */
  &.right {
    .dropdown-content {
      left: auto;
      right: 0;
    }

    .dropdown-handler {
      margin-left: auto;
    }
  }
`;

const Dropdown = ({
  className,
  handler,
  content,
  direction,
  handlerWidth = 24,
  handlerHeight = 24,
}) => {
  // Popover State
  const [state, setState] = useState(false);

  // Add all classs to an array
  const addAllClasses = ['dropdown-wrapper'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Add direction class on popover content
  if (direction) {
    addAllClasses.push(direction);
  }

  // Toggle Popover content
  const handleToggle = (e) => {
    e.stopPropagation();
    setState((state) => !state);
  };

  // Handle document click
  const handleDocumentClick = (e) => {
    e.stopPropagation();
    if (state) {
      handleToggle(e);
    }
  };

  // Handle window event listener
  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  return (
    <DropdownWrapper className={addAllClasses.join(' ')}>
      <span
        className={`dropdown-handler ${state ? 'active' : ''}`}
        onClick={handleToggle}
        style={{
          width: handlerWidth,
          height: handlerHeight,
        }}
      >
        {handler}
      </span>
      {state && (
        <div className="dropdown-content">
          {content && (
            <div className="inner-wrap" onClick={handleToggle}>
              {content}
            </div>
          )}
        </div>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
