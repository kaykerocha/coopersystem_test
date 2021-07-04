import React, {useState} from 'react';
import {
  Container,
  ContainerInput,
  ContainerText,
  InputLabel,
  InputNumeric,
} from './styles';

const Input = props => {
  const [active, setActive] = useState(false);

  const onChangeText = value => {
    props.onChangeText(value);
  };

  const focused = () => {
    setActive(true);
  };

  const unfocused = () => {
    setActive(false);
    props.onBlur();
  };

  return (
    <Container>
      <InputLabel active={active}>{props.label}</InputLabel>
      <ContainerInput active={active}>
        <ContainerText>R$</ContainerText>
        <InputNumeric
          onChangeText={value => onChangeText(value)}
          onBlur={unfocused}
          onFocus={focused}
          active={active}
          keyboardType="numeric"
        />
      </ContainerInput>
    </Container>
  );
};

export default Input;
