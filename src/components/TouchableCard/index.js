import React from 'react';

import {ContainerTouchable} from './styles';

const TouchableCard = props => {
  return (
    <ContainerTouchable
      activeOpacity={props.disabled ? 1 : 0.2}
      onPress={props.onPress}>
      {props.children}
    </ContainerTouchable>
  );
};

export default TouchableCard;
