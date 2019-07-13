import * as React from 'react';
import styled from 'styled-components';
import * as womanSitting from '../images/woman-sitting.png';

const CardContainer = styled.div`
  min-height: 500px;
  flex-basis: 50%;
`;

const Image = styled.div`
  background-image: url(${womanSitting});
  background-size: cover;
  min-height: 50%;
`;

const Title = styled.h4`
  color: #8C8C8C;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`  

const Desc = styled.a`
  color: #000000;
  font-size: 21px;
  line-height: 25px;
`

const Card: React.FC<{}> = () => (
  <CardContainer>
    <Image />
    <Title>Get started</Title>
    <Desc>Don't have any Ethereum?</Desc>
  </CardContainer>
);

export default Card;
