import React from 'react';
import {Container, Title, RightTitle} from './styles';

const Header = props => {
  return (
    <Container
      bgColor={props.bgColor}
      borderBottom={props.borderBottom}
      rightTitle={props.rightTitle}
      align={props.align}>
      <Title
        rightTitle={props.rightTitle}
        titleColor={props.titleColor}
        bgColor={props.bgColor}
        size={props.size}>
        {props.title}
      </Title>

      {props.rightTitle && (
        <RightTitle
          rightTitle={props.rightTitle}
          rightTitleColor={props.rightTitleColor}
          bgColor={props.bgColor}
          size={props.size}>
          {props.rightTitle}
        </RightTitle>
      )}
      {props.children}
    </Container>
  );
};

export default Header;
