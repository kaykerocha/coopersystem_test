import React from 'react';

import {ErrorLabel} from './styles';

const Error = props => {
  return <ErrorLabel>{props.error}</ErrorLabel>;
};

export default Error;
