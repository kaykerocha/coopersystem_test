import React from 'react';

import {ContainerButton, ComponentButtonText} from './styles';

const Button = props => {
  return (
    <ContainerButton onPress={props.onPress}>
      <ComponentButtonText>{props.title}</ComponentButtonText>
    </ContainerButton>
  );
};

export default Button;
