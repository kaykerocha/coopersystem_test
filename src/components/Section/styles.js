import styled from 'styled-components';

const Container = styled.View`
  background-color: ${props => (props.bgColor ? props.bgColor : '#ffffff')};
  flex-direction: row;
  height: ${props => (props.height ? props.height : 'auto')};
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  position: relative;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '1px')};
`;

const Title = styled.Text`
  color: ${props => (props = props.color ? props.color : '#000000')};
  font-size: ${props => (props = props.color ? '16px' : '18px')};
`;

const SubTitle = styled.Text`
  color: #757575;
  font-size: 12px;
`;

const LeftContainer = styled.View`
  flex-direction: column;
  justify-content: center;
`;
const RightContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: flex-end;
`;

export {Container, Title, SubTitle, LeftContainer, RightContainer};
