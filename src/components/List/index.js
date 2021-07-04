import React from 'react';

import {ListContainer} from './styles';

const List = props => {
  return (
    <>
      {props.header}
      <ListContainer>
        {props.children}
        {props.footer}
      </ListContainer>
    </>
  );
};

export default List;
