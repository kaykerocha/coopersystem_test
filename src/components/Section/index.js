import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  LeftContainer,
  RightContainer,
} from './styles';

const Section = props => {
  return (
    <Container
      height={props?.height}
      marginBottom={props.marginBottom}
      disabled={props.disabled}
      bgColor={props.bgColor}
      borderBottom={props.borderBottom}>
      <LeftContainer>
        <Title color={props.color}>{props.title}</Title>
        {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      </LeftContainer>

      <RightContainer>
        <Title color={props.colorRight}>{props.rightContent}</Title>
      </RightContainer>

      {props.children}
    </Container>
  );
};

export default Section;
