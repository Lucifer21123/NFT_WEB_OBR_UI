import React from 'react';
import { connect } from 'react-redux';
import { setTokenData } from '../../../redux/actions';
import {
  Container,
  CustomButton,
  CustomSvg,
  CardGroup,
  ContainerBody,
  SubContainer,
} from './style';
import { NFTText } from '../../../components/styles';
import { CreateCard } from '../../../components/CreateCard';
const Create = ({ tokenData, setTokenData }) => {
  return (
    <Container>
      <SubContainer>
        <ContainerBody>
          <CustomButton>
            <CustomSvg>
              <svg
                viewBox="0 0 14 12"
                fill="none"
                width="14"
                height="14"
                xlmns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z"
                  fill="currentColor"
                ></path>
              </svg>
            </CustomSvg>
            <span>Go back</span>
          </CustomButton>
          <span className="headertext">Create collectible</span>
          <NFTText
            color="rgba(255,255,255,0.5)"
            margin="16px 0 0"
            align="left"
            fontWeight="500"
          >
            Choose "Single" if you want your collectible to be one of a kind or
            "Multiple" if you want to sell one collectible multiple times
          </NFTText>
          <CardGroup>
            <CreateCard text="Single" ribbon="Timed acutions 🔥" href="/asdf" />
            <CreateCard text="Multiple" />
          </CardGroup>
          <NFTText color="rgba(255,255,255,0.5)" margin="32px 0 0" align="left">
            We do not own your private keys and cannot access your funds without
            your confirmation
          </NFTText>
        </ContainerBody>
      </SubContainer>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProp)(Create);
