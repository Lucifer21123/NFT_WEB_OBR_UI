import React from 'react';
import { Container, Header, CenterIcon, Content } from './style';
import { Button } from '../../../components/Button';
import { NFTText } from '../../../components/styles';
import { TabSelect } from '../../../components/TabSelect';
import { LikeCard } from '../../../components/LikeCard';
const Items = () => {
  return (
    <Container>
      <Header>
        <div className="centericon">
          <CenterIcon>
            <div className="iconimg">
              <img
                alt="Identicon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NiwyNDYsMjQ2LDEpOyc+PGcgc3R5bGU9J2ZpbGw6cmdiYSgzOCw1NSwyMTcsMSk7IHN0cm9rZTpyZ2JhKDM4LDU1LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuNjsnPjxyZWN0ICB4PSc1NScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc1NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc1NScgeT0nNTUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc1NScgeT0nNjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc2NScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NScgeT0nNjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc2NScgeT0nNjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NScgeT0nNzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc2NScgeT0nNzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nNTUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nNTUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nNzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nNzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4="
                loading="lazy"
                className="sc-eirseW evgNzS"
              ></img>
            </div>
          </CenterIcon>
        </div>
        <div className="headerbar">
          <Button variant="transparent">
            <NFTText>Add cover</NFTText>
          </Button>
        </div>
      </Header>
      <Content>
        <div className="profilewrapper">
          <div></div>
          <div>
            {/* <TabSelect /> */}
            <LikeCard />
          </div>
        </div>
      </Content>
    </Container>
  );
};
export default Items;
