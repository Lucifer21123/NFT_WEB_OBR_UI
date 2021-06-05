import React from 'react';
import styled from 'styled-components';
import { CircleButton } from '../CircleButton';
const CardLayout = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  align-items: stretch;
`;
const CardStyle = styled.div`
  width: 645px;
  height: 420px;
  max-width: 645px;
  max-height: 420px;
  overflow: hidden;
  position: relative;
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
`;
export const Iconstyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & .lefticon {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const SubIcon = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 100%;
  width: 26px;
  height: 26px;
  overflow: hidden;
  background-color: rgb(18, 18, 18);
`;

export const LikeCard = (props) => {
  return (
    <CardLayout>
      <CardStyle>
        <Iconstyle>
          <div className="lefticon">
            <SubIcon>
              <img
                alt="Identicon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNicgaGVpZ2h0PScyNicgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsNTUsMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw1NSwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjEzOyc+PHJlY3QgIHg9JzEyJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEyJyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTInIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNCcgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTAnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PScxNicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzgnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOCcgeT0nMTYnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTYnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9nPjwvc3ZnPg=="
                loading="lazy"
                class="sc-eirseW evgNzS"
              />
            </SubIcon>
            <SubIcon>
              <img
                alt="Identicon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNicgaGVpZ2h0PScyNicgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsNTUsMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw1NSwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjEzOyc+PHJlY3QgIHg9JzEyJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEyJyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTInIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNCcgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTAnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PScxNicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzgnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOCcgeT0nMTYnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTYnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9nPjwvc3ZnPg=="
                loading="lazy"
                class="sc-eirseW evgNzS"
              />
            </SubIcon>
            <SubIcon>
              <img
                alt="Identicon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNicgaGVpZ2h0PScyNicgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsNTUsMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw1NSwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjEzOyc+PHJlY3QgIHg9JzEyJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEyJyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTInIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNCcgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTAnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PScxNicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzgnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc4JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOCcgeT0nMTYnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTYnIHk9JzE2JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9nPjwvc3ZnPg=="
                loading="lazy"
                class="sc-eirseW evgNzS"
              />
            </SubIcon>
            <CircleButton>
              <svg
                viewBox="0 0 14 4"
                fill="none"
                width="14"
                height="14"
                xlmns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </CircleButton>
          </div>
          <div className="righticon"></div>
        </Iconstyle>
        <div className="imagestyle"></div>
        <div className="headerstyle"></div>
        <div className="description"></div>
      </CardStyle>
    </CardLayout>
  );
};
