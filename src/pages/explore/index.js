import React, { useState, useEffect } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import { connect } from 'react-redux';
import { setTokenData } from '../../redux/actions';
import Hero from './hero';
import { heroList } from '../../constants/heros';
import { DashboardWrapper } from './styles';
import TopCustomer from './topcustomer';
import LiveAuctions from './liveauctions';
import HotCollections from './hotcollections';
import ExploreSection from './Explore';
import GradientButton from '../../components/GradientButton';

const Dashboard = ({ tokenData, setTokenData }) => {
  const [open, setOpen] = useState(false);

  const onGradiendButtonClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <DashboardWrapper>
      <Hero heroList={heroList} />
      <TopCustomer />
      <LiveAuctions />
      <HotCollections></HotCollections>
      <ExploreSection toggle={open}></ExploreSection>
      <GradientButton onClick={onGradiendButtonClick} toggle={!open}>
        Load More
      </GradientButton>
    </DashboardWrapper>
  );
};

const mapStateToProps = ({ common }) => {
  const { tokenData } = common;
  return { tokenData };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setTokenData: (data) => dispatch(setTokenData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Dashboard);
