import styled from 'styled-components';

export const TokenContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  background: rgb(18, 18, 18);
  height: 100vh;
`;

export const VideoLayout = styled.div`
  position: fixed;
  bottom: 0px;
  right: 515px;
  left: 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;
export const VideoItem = styled.div`
  height: 100%;
  padding: 64px 0px;
  text-align: center;
`;

export const VideoContainer = styled.video`
  height: 100%;

  visibility: visible;
  left: 0px;
  opacity: 1;
  border-radius: 6px;
  max-width: 100%;
`;

export const DetailItem = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 0;
  padding-left: calc(100% - 515px);
`;
export const Total = styled.div`
  height: 100%;
  min-height: 0px;
  min-width: 0px;
  max-width: 100%;
  -webkit-box-flex: 1;
  margin: 0px;
  padding: 28px 0px 0px 20px;
  overflow-y: scroll;
`;

export const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  &.header {
    margin: 0px 0px 16px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MiniTitle = styled.div`
  margin: 4px 0px 0px;
  display: flex;
  flex-direction: row;
`;
export const Bidbar = styled.div`
  margin: 8px 0px 0px;
  display: flex;
  flex-direction: column;
`;
export const SaleText = styled.div`
  padding: 0px 16px;
  text-align: center;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 22px;
  margin: 0px 0px 16px;
  font-size: 14px;
  max-width: 100%;
  & .back-text {
    color: rgba(255, 255, 255, 0.9);
  }
  & .back-text {
    color: rgba(255, 255, 255, 0.7);
  }
`;
export const Collection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 16px;
  justify-content: space-between;
  width: 100%;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  margin: 4px 0px 24px 0px;
`;
export const DetailFooter = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 2px;
  position: sticky;
  bottom: 0px;
  box-shadow: rgb(18 18 18 / 90%) 0px -14px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(20px);
`;
export const Spectator = styled.div`
  background: linear-gradient(
    to right,
    rgb(12, 80, 255) 0%,
    rgb(12, 80, 255) 24%,
    rgb(91, 157, 255) 55.73%,
    rgb(255, 116, 241) 75%,
    rgb(255, 116, 241) 100%
  );
  height: 5px;
`;
export const FootBody = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px 16px 0px;
`;
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;
export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0px 0px 0px 10px;
  & .bidbody {
    display: flex;
    flex-direction: row;
    & .bidtime {
      margin-right: 10px;
    }
  }
`;
