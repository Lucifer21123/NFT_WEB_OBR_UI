import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  border-color: rgb(255, 255, 255);
`;
export const Header = styled.div`
  height: 260px;
  background-color: rgba(255, 255, 255, 0.03);
  position: relative;
  & .headerbar {
    transform: translateY(100px);
    opacity: 0;
    z-index: 10;
    transition: all 0.12s ease-in-out 0s;
  }
  & .centericon {
    position: absolute;
    bottom: -30px;
    left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-basis: auto;
  }
`;
export const CenterIcon = styled.div`
  border: 4px solid rgb(18, 18, 18);
  border-radius: 100%;
  position: relative;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  & .iconimg {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-flow: column;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    background-color: rgb(18, 18, 18);
  }
`;
export const Content = styled.div`
  margin: 52px 0px 0px;
  padding: 0px 16px;
  display: flex;
  flex-flow: column;
`;
export const Pofilewrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  & .wrapper {
    display: flex;
    flex-flow: row;
    & span {
      font-size: 28px;
      line-height: 33.6px;
      font-weight: 900;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & button {
      width: auto;
      padding: 0px;
      background: transparent;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
  & .buttonwrapper {
    display: flex;
    flex-flow: row;
    margin: 16px 0px 0px;
  }
`;
export const Cardwrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 32px 0px 0px;
`;
