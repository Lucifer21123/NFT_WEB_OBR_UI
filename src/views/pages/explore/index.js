import React, { useState, useEffect } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import { connect } from 'react-redux';
import { setTokenData } from '../../../redux/actions';
import Hero from './hero';
import { heroList } from '../../../constants/heros';
import { DashboardWrapper } from './styles';
import TopCustomer from './topcustomer';
import LiveAuctions from './liveauctions';

const Dashboard = ({ tokenData, setTokenData }) => {
  return (
    <DashboardWrapper>
      <Hero heroList={heroList} />
      <TopCustomer />
      <LiveAuctions />
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
