import styled from 'styled-components';

const Container = styled.View`
  background-color: ${props => (props.bgColor ? props.bgColor : 'blue')};
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.align ? props.align : 'center')};
  padding: 0px 15px;
  height: 60px;
  border-color: ${props => (props.borderBottom ? '#fae128' : '#f4f4f4')};
  border-bottom-width: ${props => (props.borderBottom ? '5px' : '1px')};
`;

const Title = styled.Text`
  color: ${props => (props.titleColor ? props.titleColor : '#ffffff')};
  font-weight: ${props => (props.size ? 'normal' : 'bold')};
  font-size: ${props => (props.size ? props.size : '20px')};
`;

const RightTitle = styled.Text`
  color: ${props =>
    props.rightTitleColor ? props.rightTitleColor : '#ffffff'};
  font-weight: ${props => (props.size ? 'normal' : 'bold')};
  font-size: ${props => (props.size ? props.size : '20px')};
`;

export {Container, Title, RightTitle};
