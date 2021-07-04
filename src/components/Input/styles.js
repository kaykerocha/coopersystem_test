import styled from 'styled-components';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '1px')};
`;

const ContainerInput = styled.View`
  flex-direction: row;
  height: 40px;
  border-bottom-color: ${props => (props.active ? '#0000ff' : '#757575')};
  border-bottom-width: 1px;
`;

const ContainerText = styled.Text`
  padding-top: 13px;
  font-size: 16px;
`;

const InputLabel = styled.Text`
  color: ${props => (props.active ? '#0000ff' : '#757575')};
  font-weight: ${props => (props.active ? 'normal' : 'normal')};
  width: 100%;
  font-size: 14px;
`;

const InputNumeric = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding-bottom: 0px;
`;

export {Container, ContainerInput, ContainerText, InputLabel, InputNumeric};
