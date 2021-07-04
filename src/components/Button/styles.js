import styled from 'styled-components';

const ContainerButton = styled.TouchableOpacity`
  flex: 1;
  height: 60px;
  background-color: #fae128;
  align-items: center;
  justify-content: center;
`;

const ComponentButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #005aa5;
`;

export {ContainerButton, ComponentButtonText};
