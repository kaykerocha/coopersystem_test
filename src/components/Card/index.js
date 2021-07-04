import React from 'react';

import {Container} from './styles';

const Card = props => {
  return (
    <Container marginBottom={props?.marginBottom}>{props.children}</Container>
  );
};

export default Card;
