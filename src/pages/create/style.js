import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  -webkit-box-align: stretch;
  align-items: stretch;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(4, 4, 5);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
`;
export const SubContainer = styled.div`
  max-width: 580px;
  margin: 0px auto;
`;
export const ContainerBody = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 32px;
  padding-right: 32px;
  & .headertext {
    font-size: 36px;
    font-weight: 900;
    margin: 20px 0 30px 0;
    text-align: left;
  }
  @media only screen and (min-width: 981px) {
    .herdertext {
      font-size: 36px;
    }
  }
  @media only screen and (min-width: 768px) {
    .herdertext {
      font-size: 32px;
    }
  }
`;

export const CustomButton = styled.div`
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border-style: solid;
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  max-width: 100%;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  span {
    text-decoration: none;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    font-family: Arial;
  }
  & :hover {
    color: rgb(255, 255, 255);
  }
`;

export const CustomSvg = styled.span`
  margin: 0px 8px 0px 0px;
`;
export const CardGroup = styled.div`
  margin: 40px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: auto;
  gap: 16px;
`;
