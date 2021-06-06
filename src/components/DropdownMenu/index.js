import React, { useState, useEffect, useRef } from 'react';
import theme from '../../theme';

import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: relative;
  width: auto;
`;
const StyledDropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999999;
  color: white;
  padding: 16px 0;
  top: 55px;
  right: 0;
  position: absolute;
  border-radius: 8px;
  background-color: ${theme.bgInput};
  border: 1px solid ${theme.transparentBorder};
  display: ${({ hide }) => (hide ? 'block' : 'none')};
  width: 50%;
  min-width: 150px;
  max-height: auto;
`;
const StyledDropDownHeader = styled.div`
  cursor: pointer;
  p {
    font-color: white;
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 20px;
  }
  align-items: center;
  height: 42px;
  padding: 5px 9px;
  padding-bottom: 10px;

  text-align: left;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${(props) => props.radius};
  img {
    height: 28px;
    margin-right: 12px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

const StyledDropDownItemDiv = styled.div`
  margin: 0 12px;
  padding: 8px 12px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    height: 28px;
    margin-right: 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .check-mark {
    display: ${(props) => (props.isSelect ? 'inline' : 'none')};
    margin-bottom: 6px;
    transform: rotate(45deg);
    height: 12px;
    width: 8px;
    border-bottom: 2px solid ${theme.textBlue};
    border-right: 2px solid ${theme.textBlue};
  }
`;

const StyledDropDownDisableItemDiv = styled.div`
  color: ${theme.textGray};
  margin: 0 12px;
  padding: 10px 12px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    height: 28px;
    margin-right: 12px;
  }
`;

const DropdownMenu = ({ list, click, radius, children }) => {
  const [current, setCurrent] = useState({});
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

  useEffect(() => {
    setCurrent(list[0]);
  }, []);

  const handleClickOutside = (e) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setHide(false);
  };

  useEffect(() => {
    if (hide) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hide]);

  return (
    <StyledDropDown>
      <StyledDropDownHeader onClick={() => setHide(!hide)} radius={radius}>
        <p>{children}</p>
      </StyledDropDownHeader>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide}>
        {list.map((item, index) => {
          return item.type == 'label' ? (
            <StyledDropDownDisableItemDiv key={`__key-${index.toString()}`}>
              {item.label}
            </StyledDropDownDisableItemDiv>
          ) : (
            <StyledDropDownItemDiv
              isSelect={current.id === item.id}
              key={`__key-${index.toString()}`}
              onClick={() => {
                setHide(false);
                setCurrent(item);
                click(item);
              }}
            >
              {item.label}
              <span className="check-mark"></span>
            </StyledDropDownItemDiv>
          );
        })}
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default DropdownMenu;
